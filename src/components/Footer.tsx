import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full p-4 border-t bg-white">
      <div
        className={cn(
          "md:max-w-screen-2xl mx-auto flex items-center w-full justify-between",
          textFont.className
        )}
      >
        <button>Privacy Policy</button>
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <button className="text-neutral-800">Terms of Service</button>
        </div>
      </div>
    </div>
  );
};
