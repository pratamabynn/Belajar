import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { Calendar as CalendarIcon, PlusIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { useState } from "react";
import BreadcrumbComponent from "@/components/block/Breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useNavigate } from "react-router-dom";

const barang = [
  {
    status: "Menunggu",
    judul_konsultasi: " Masalah Jaringan Internet",
    tanggal: "23-07-2024",
  },
  {
    status: "Proses",
    judul_konsultasi: "Pelayanan Publik Digital",
    tanggal: "25-07-2024",
  },
  {
    status: "Ditolak",
    judul_konsultasi: "Masalah Infrastruktur Jaringan",
    tanggal: "27-07-2024",
  },
  {
    status: "Selesai",
    judul_konsultasi: "Kebijakan dan Regulasi",
    tanggal: "29-07-2024",
  },
];

const Konsultasi = () => {
  const [status, setStatus] = useState("");
  const [keyword, setKeyword] = useState("");
  const [date, setDate] = useState();

  const navigate = useNavigate();

  const filteredBarang = barang.filter((item) => {
    const matchesStatus = status ? item.status === status : true;
    const matchesKeyword = keyword
      ? item.judul_konsultasi.toLowerCase().includes(keyword.toLowerCase())
      : true;
    const matchesDate = date ? new Date(item.tanggal) === date : true;
    return matchesStatus && matchesKeyword && matchesDate;
  });

  const handleReset = () => {
    setStatus("");
    setKeyword("");
    setDate(null);
  };

  return (
    <>
      <div className="mt-20 mb-4">
        <BreadcrumbComponent />
        <div className="flex w-full justify-between">
          <h1 className="font-semibold text-2xl mt-1 mb-2">Konsultasi</h1>
          <Button size="sm" onClick={() => navigate("create")}>
            <PlusIcon className="w-4 h-4" />
            Buat Konsultasi
          </Button>
        </div>
        <Separator />
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Filter</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row gap-4">
          <Select onValueChange={(value) => setStatus(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Pilih Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Pilih Status</SelectLabel>
                <SelectItem value="Menunggu">Menunggu</SelectItem>
                <SelectItem value="Proses">Proses</SelectItem>
                <SelectItem value="Ditolak">Ditolak</SelectItem>
                <SelectItem value="Selesai">Selesai</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Input
            placeholder="Masukkan kata kunci..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[280px] justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pilih tanggal</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <Button onClick={handleReset}>Reset</Button>
        </CardContent>
      </Card>

      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Hasil Pencarian</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">No</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Judul Konsultasi</TableHead>
                <TableHead className="text-right">Tanggal</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredBarang.length !== 0 ? (
                filteredBarang.map((item, idx) => (
                  <TableRow key={idx}>
                    <TableCell className="font-medium">{idx + 1}</TableCell>
                    <TableCell>{item.status}</TableCell>
                    <TableCell>{item.judul_konsultasi}</TableCell>
                    <TableCell className="text-right">{item.tanggal}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} className="text-center">
                    Tidak ada data yang ditemukan
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
};

export default Konsultasi;
