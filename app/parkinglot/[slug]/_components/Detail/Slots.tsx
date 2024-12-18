import React from "react";
import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Inbox } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const Slots = ({ slots }: { slots: Slot[] }) => {
  return (
    <ScrollArea>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-4 gap-y-8">
        {slots.map((sl, idx) => (
          <div key={`slot-${idx}`}>
            <AspectRatio
              ratio={1 / 1}
              className="border-2 border-dashed rounded-lg mb-3 flex items-center justify-center"
            >
              {sl.status === "empty" ? (
                <div className="text-muted-foreground flex flex-col items-center">
                  <Inbox className="w-8 h-8" />
                  <span className="capitalize text-sm">{sl.status}</span>
                </div>
              ) : (
                <Image
                  src={`/car-${Math.floor(Math.random() * 5) + 1}.png`}
                  alt="car image"
                  width={48}
                  height={48}
                />
              )}
            </AspectRatio>
            {sl.status === "served" && (
              <p className="text-center border rounded-sm p-2 bg-muted">
                {sl.licensePlate}
              </p>
            )}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};

export default Slots;
