import {
  LuClipboardList,
  LuClipboardCheck,
  LuClipboardX,
} from "react-icons/lu";
import { MdPendingActions } from "react-icons/md";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import BreadcrumbComponent from "@/components/block/Breadcrumb";
import { Link } from "react-router-dom";

import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import { Charts } from "@/components/block/Charts";

const Dashboard = () => {
  return (
    <>
      <div className="mt-20 mb-4">
        <BreadcrumbComponent />
        <h1 className="font-semibold text-2xl mt-1 mb-2">Dashboard</h1>
        <Separator />
      </div>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card x-chunk="dashboard-01-chunk-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <LuClipboardList className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              Konsultasi menunggu tindak lanjut
            </p>
          </CardContent>
        </Card>
        <Card x-chunk="dashboard-01-chunk-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Selesai</CardTitle>
            <LuClipboardCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">
              Konsultasi telah selesai
            </p>
          </CardContent>
        </Card>
        <Card x-chunk="dashboard-01-chunk-2">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Diproses</CardTitle>
            <MdPendingActions className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6</div>
            <p className="text-xs text-muted-foreground">
              Konsultasi sedang diproses
            </p>
          </CardContent>
        </Card>
        <Card x-chunk="dashboard-01-chunk-3">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ditolak</CardTitle>
            <LuClipboardX className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">
              Konsultasi telah ditolak
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3 mt-8">
        <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
          <CardHeader className="flex flex-row items-center">
            <div className="grid gap-2">
              <CardTitle>Aktivitas Konsultasi</CardTitle>
              <CardDescription>Daftar konsultasi baru-baru ini</CardDescription>
            </div>
            <Button asChild size="sm" className="ml-auto gap-1">
              <Link to="#">
                Lihat semua
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nama</TableHead>
                  <TableHead>Judul</TableHead>
                  <TableHead className="text-right">Tanggal & Waktu</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Ikhsan</div>
                  </TableCell>
                  <TableCell className="font-normal">
                    Masalah Koneksi Jaringan
                  </TableCell>
                  <TableCell className="text-right">2023-06-23</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Arbian Alex</div>
                  </TableCell>
                  <TableCell className="font-normal">
                    Kebijakan dan Regulasi
                  </TableCell>
                  <TableCell className="text-right">2023-06-23</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card x-chunk="dashboard-01-chunk-5">
          <CardHeader>
            <CardTitle>Jadwal Peminjaman</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-12 gap-4">
            <div className="col-span-7">
              <Calendar mode="single" className="rounded-md border" />
            </div>
            <div className="col-span-5">
              <p className="font-medium text-slate-600">Hari ini</p>
              <Separator />
              <div className="mt-4">
                <p className="text-slate-400 font-normal text-sm">
                  Tidak ada peminjaman
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <Charts />
    </>
  );
};

export default Dashboard;
