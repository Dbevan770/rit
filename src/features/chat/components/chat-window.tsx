import { useState } from "react";
import { Input } from "@/components/ui/input";
import { MessageSafeArea } from "@/features/chat/components";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";
import { cn } from "@/lib/utils";

export const ChatWindow = () => {
  const [message, setMessage] = useState("");
  const { roomCode } = useParams();

  const sendMessage = async () => {
    if (!message || message === "") return;
    console.log(message);
    setMessage("");

    const clientId = sessionStorage.getItem("clientId");

    const bodyRaw = {
      type: "message",
      clientId: clientId,
      clientName: "Test User",
      roomCode: roomCode,
      payload: message,
    };

    const body = JSON.stringify(bodyRaw);

    const response = await fetch("http://localhost:8080/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });

    if (response.status !== 201) {
      console.error("Failed to send message");
    }

    const data = await response.json();

    console.log(data);
  };

  return (
    <div className="h-full w-[800px] mx-auto border-l-2 border-r-2 border-zinc-700 bg-zinc-950 flex flex-col items-center">
      <MessageSafeArea />
      <div className="h-[1px] border-[1px] border-zinc-800 w-full"></div>
      <div className="flex items-center justify-center border-zinc-500 w-full rounded-b-lg rounded-t-none bg-zinc-900">
        <Input
          className={cn(
            "w-full text-2xl px-4 py-8 border-none outline-none bg-transparent rounded-l-lg rounded-r-none focus:outline-none ring-0 ring-offset-0 ring-offset-transparent focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-zinc-600"
          )}
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          placeholder="Type a message..."
        />
        <Button
          type="button"
          onClick={sendMessage}
          className={cn(
            "px-4 py-8 border-none bg-transparent text-white rounded-l-none rounded-r-lg",
            "hover:bg-transparent hover:text-emerald-600"
          )}
        >
          <Send size={32} />
        </Button>
      </div>
    </div>
  );
};
