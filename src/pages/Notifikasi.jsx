import BreadcrumbComponent from "@/components/block/Breadcrumb";
import { Separator } from "@/components/ui/separator";
import { Bell } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Notifikasi = () => {
  return (
    <>
      <div className="mt-20 mb-4">
        <BreadcrumbComponent />
        <h1 className="font-semibold text-2xl mt-1 mb-2">Notifikasi</h1>
        <Separator />
      </div>
      <div>
        <Alert>
          <Bell className="h-4 w-4" />
          <AlertTitle>Ini Notifikasi</AlertTitle>
          <AlertDescription>
            Ini adalah notifikasi yang akan muncul jika terdapat notifikasi yang masuk
          </AlertDescription>
        </Alert>
      </div>
    </>
  );
};

export default Notifikasi;
