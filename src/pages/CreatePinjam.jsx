import BreadcrumbComponent from "@/components/block/Breadcrumb";
import { Button } from "@/components/ui/button";
import { SaveIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";

const instansi = [
  {
    value: "Dinas Lingkungan Hidup",
    label: "Dinas Lingkungan Hidup",
  },
  {
    value: "Dinas Kominfo",
    label: "Dinas Kominfo",
  },
];

const jenisIdentitas = [
  {
    value: "KTP",
    label: "KTP",
  },
  {
    value: "SIM",
    label: "SIM",
  },
  {
    value: "Paspor",
    label: "Paspor",
  },
  {
    value: "NIP",
    label: "NIP",
  },
];

const CreatePinjam = () => {
  const navigate = useNavigate();

  const [openInstansi, setOpenInstansi] = useState(false);
  const [openJenisIdentitas, setOpenJenisIdentitas] = useState(false);
  const [value, setValue] = useState("");
  const [date, setDate] = useState({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  return (
    <>
      <div className="mt-20 mb-4">
        <BreadcrumbComponent />
        <div className="flex w-full justify-between">
          <h1 className="font-semibold text-2xl mt-1 mb-2">Form Pinjam Assets</h1>
          <Button
            size="sm"
            className="flex gap-2"
            onClick={() => navigate("/konsultasi")}
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali
          </Button>
        </div>
        <Separator />
        <div className="grid grid-cols-1 mt-4 gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Detail Peminjam</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="pt-4 pb-12 gap-4">
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1.5">
                    <Label>Nama PIC</Label>
                    <Input placeholder="John Doe" />
                  </div>
                  <div className="space-y-1.5">
                    <Label>Jabatan PIC</Label>
                    <Input placeholder="CEO" />
                  </div>
                  <div className="space-y-1.5">
                    <Label>Instansi PIC</Label>
                    <div>
                      <Popover
                        open={openInstansi}
                        onOpenChange={setOpenInstansi}
                      >
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={openInstansi}
                            className="w-[200px] justify-between"
                          >
                            {value
                              ? instansi.find((item) => item.value === value)
                                  ?.label
                              : "Cari instansi..."}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0">
                          <Command>
                            <CommandInput placeholder="Cari instansi..." />
                            <CommandList>
                              <CommandEmpty>
                                Perangkat daerah tidak ditermukan
                              </CommandEmpty>
                              <CommandGroup>
                                {instansi.map((item) => (
                                  <CommandItem
                                    key={item.value}
                                    value={item.value}
                                    onSelect={(currentValue) => {
                                      setValue(
                                        currentValue === value
                                          ? ""
                                          : currentValue
                                      );
                                      setOpenInstansi(false);
                                    }}
                                  >
                                    <Check
                                      className={cn(
                                        "mr-2 h-4 w-4",
                                        value === item.value
                                          ? "opacity-100"
                                          : "opacity-0"
                                      )}
                                    />
                                    {item.label}
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label>Kontak PIC</Label>
                    <Input placeholder="Kontak" />
                  </div>
                  <div className="space-y-1.5">
                    <Label>Jenis Identitas</Label>
                    <div>
                      <Popover
                        open={openJenisIdentitas}
                        onOpenChange={setOpenJenisIdentitas}
                      >
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={openJenisIdentitas}
                            className="w-[200px] justify-between"
                          >
                            {value
                              ? jenisIdentitas.find(
                                  (item) => item.value === value
                                )?.label
                              : "Jenis identitas..."}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0">
                          <Command>
                            <CommandInput placeholder="Cari identitas..." />
                            <CommandList>
                              <CommandEmpty>
                                Jenis identitas tidak ditemukan
                              </CommandEmpty>
                              <CommandGroup>
                                {jenisIdentitas.map((item) => (
                                  <CommandItem
                                    key={item.value}
                                    value={item.value}
                                    onSelect={(currentValue) => {
                                      setValue(
                                        currentValue === value
                                          ? ""
                                          : currentValue
                                      );
                                      setOpenJenisIdentitas(false);
                                    }}
                                  >
                                    <Check
                                      className={cn(
                                        "mr-2 h-4 w-4",
                                        value === item.value
                                          ? "opacity-100"
                                          : "opacity-0"
                                      )}
                                    />
                                    {item.label}
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label>Nomor Identitas</Label>
                    <Input placeholder="Nomor identitas" />
                    <p className="text-xs text-slate-500">
                      Masukkan nomor ktp/sim/passport/nip peminjam
                    </p>
                  </div>
                </div>
                <div>
                  <div className="space-y-1.5">
                    <Label>Alamat Peminjam</Label>
                    <Textarea />
                  </div>
                  <div className="space-y-1.5 mt-2">
                    <Label htmlFor="picture">
                      Dokumen Pendukung Resmi{" "}
                      <span className="text-red-500">*</span>
                    </Label>
                    <Input id="picture" type="file" />
                    <p className="text-xs text-slate-500">
                      Upload dokumen resmi pendukung yang telah di tanda tangani
                      oleh kepala satuan kerja dengan ukuran file maksimal 2MB
                    </p>
                  </div>
                  <div className="space-y-1.5 mt-2">
                    <Label>Jenis Durasi</Label>
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Pilih durasi" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Durasi</SelectLabel>
                          <SelectItem value="harian">Harian</SelectItem>
                          <SelectItem value="jam">Jam</SelectItem>
                          <SelectItem value="menit">Menit</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5 mt-2">
                    <Label htmlFor="picture">Tanggal Pinjam</Label>
                    <div>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            id="date"
                            variant={"outline"}
                            className={cn(
                              "w-[300px] justify-start text-left font-normal",
                              !date && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date?.from ? (
                              date.to ? (
                                <>
                                  {format(date.from, "LLL dd, y")} -{" "}
                                  {format(date.to, "LLL dd, y")}
                                </>
                              ) : (
                                format(date.from, "LLL dd, y")
                              )
                            ) : (
                              <span>Pick a date</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            initialFocus
                            mode="range"
                            defaultMonth={date?.from}
                            selected={date}
                            onSelect={setDate}
                            numberOfMonths={2}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label>Keterangan</Label>
                    <Textarea />
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Aset yang akan dipinjam</CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <div className="space-y-1.5">
                  <Label>Aset</Label>
                  <Input placeholder="Pilih Aset" />
                  <p className="text-xs text-slate-500">
                    Item/Ruangan diatas adalah yang tersedia pada hari dan jam
                    yang anda pilih.
                  </p>
                </div>
              </div>
              <Table className="mt-2">
                <TableHeader>
                  <TableRow>
                    <TableHead>Nama Aset</TableHead>
                    <TableHead>Jumlah</TableHead>
                    <TableHead className="text-right">Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody></TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <div className="w-full flex justify-end">
                <Button className="flex gap-2">
                  <SaveIcon className="w-4 h-4" />
                  Simpan
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
};

export default CreatePinjam;
