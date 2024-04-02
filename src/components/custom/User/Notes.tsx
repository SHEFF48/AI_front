import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import React from "react";

const UserNotes = () => {
  return (
    <div className="flex flex-col justify-start gap-[20px] text-center">
      <h3 className=" font-light">Article in dialog 0117-2</h3>
      <Button
        variant={"link"}
        className="flex gap-[12px] text-color-2 bg-transparent"
      >
        <FileText />
        <p>Додати замітку</p>
      </Button>
    </div>
  );
};

export default UserNotes;
