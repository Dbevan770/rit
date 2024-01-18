import { MessageRow } from "@/features/chat/components";
export const MessagesContainer = () => {
  return (
    <div className="flex flex-col-reverse gap-4 w-full">
      <MessageRow />
    </div>
  );
};
