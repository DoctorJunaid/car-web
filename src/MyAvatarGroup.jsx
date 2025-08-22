// MyAvatarGroup.jsx

// Import standard avatar components from the 'ui' folder
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

// Import the special AvatarGroup from its 'animate-ui' folder
import { AvatarGroup } from "@/components/animate-ui/components/avatar-group";

// Import standard tooltip components
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";


const AVATARS = [
  {
    src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    fallback: "SK",
    tooltip: "Skyler",
  },
  {
    src: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    fallback: "CN",
    tooltip: "Conner",
  },
  {
    src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    fallback: "AW",
    tooltip: "Angela",
  },
];

export function MyAvatarGroup() {
  return (
    <TooltipProvider>
      <AvatarGroup invertOverlap>
        {AVATARS.map((avatar, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <Avatar>
                <AvatarImage src={avatar.src} />
                <AvatarFallback>{avatar.fallback}</AvatarFallback>
              </Avatar>
            </TooltipTrigger>
            <TooltipContent>
              <p>{avatar.tooltip}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </AvatarGroup>
    </TooltipProvider>
  );
}