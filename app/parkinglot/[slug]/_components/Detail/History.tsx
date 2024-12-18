import React from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";

const CenteredCell = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      "flex items-center justify-center capitalize p-4 border-b h-16",
      className
    )}
  >
    {children}
  </div>
);

const History = ({ history }: { history: ParkedHistory }) => {
  return (
    <ScrollArea>
      <div className="grid grid-cols-3 sticky top-0 bg-background">
        <CenteredCell className="py-0 text-muted-foreground">
          License plate
        </CenteredCell>
        <CenteredCell className="py-0 text-muted-foreground">
          Start time
        </CenteredCell>
        <CenteredCell className="py-0 text-muted-foreground">
          End time
        </CenteredCell>
      </div>
      {history.map(({ licensePlate, startTime, endTime }) => (
        <div key={licensePlate} className="grid grid-cols-3 gap-2">
          <CenteredCell className="font-semibold">{licensePlate}</CenteredCell>
          <CenteredCell>{format(startTime, "dd/MM/yyyy HH:mm")}</CenteredCell>
          <CenteredCell>
            {endTime ? (
              format(endTime, "dd/MM/yyyy HH:mm")
            ) : (
              <Badge className="bg-yellow-600 dark:text-yellow-600">
                Pending
              </Badge>
            )}
          </CenteredCell>
        </div>
      ))}
    </ScrollArea>
  );
};

export default History;
