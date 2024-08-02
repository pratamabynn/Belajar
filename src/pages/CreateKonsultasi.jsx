import BreadcrumbComponent from "@/components/block/Breadcrumb";
import { Button } from "@/components/ui/button";
import { SaveIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
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
import TextEditor from "@/components/block/TextEditor";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const CreateKonsultasi = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="mt-20 mb-4">
        <BreadcrumbComponent />
        <div className="flex w-full justify-between">
          <h1 className="font-semibold text-2xl mt-1 mb-2">Form Konsultasi</h1>
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
        <Card className="mt-4">
          <CardContent>
            <form className="pt-4 pb-12">
              <div className="flex gap-4 items-start">
                <div className="space-y-1.5">
                  <Label>Topik</Label>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Pilih Topik" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label>Sub Topik</Label>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Pilih Sub Topik" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="picture">Berkas Pendukung</Label>
                  <Input id="picture" type="file" />
                  <p className="text-xs text-slate-500">
                    Silahkan pilih file pendukung agar kami proses dengan cepat,
                    format file:{" "}
                    <span className="font-bold">
                      jpg,png,webp dan maksimal ukuran 2MB
                    </span>
                  </p>
                </div>
              </div>
              <div className="space-y-1.5">
                <Label>Judul</Label>
                <Input placeholder="Judul" />
              </div>
              <div className="space-y-1.5">
                <Label>Pesan</Label>
                <TextEditor />
              </div>
            </form>
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
    </>
  );
};

export default CreateKonsultasi;
