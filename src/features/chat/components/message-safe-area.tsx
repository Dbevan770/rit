import { MessagesContainer } from "@/features/chat/components";

export const MessageSafeArea = () => {
  return (
    <div className="flex flex-1 w-full overflow-y-auto justify-end px-4 pb-4 pt-8">
      <MessagesContainer />
    </div>
  );
};
