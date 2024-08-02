import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const BreadcrumbComponent = () => {
  const path = window.location.pathname;
  const pathComponents = path.split("/").filter(Boolean);
  const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

  const breadcrumbItems = pathComponents.map((component, index) => {
    const href = "/" + pathComponents.slice(0, index + 1).join("/");
    const name = capitalize(component);
    return (
      <React.Fragment key={href}>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href={href}>{name}</BreadcrumbLink>
        </BreadcrumbItem>
      </React.Fragment>
    );
  });

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        {breadcrumbItems}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbComponent;
