import { Message } from "@/features/chat/components";
export const MessageRow = () => {
  return (
    <div className="w-full max-h-max grid grid-cols-2">
      <Message
        message="Placeholder"
        username="Test User"
        timestamp={Date.now().toLocaleString()}
        self={true}
      />
    </div>
  );
};
