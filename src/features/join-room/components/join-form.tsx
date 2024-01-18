import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormField,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { schema, JoinRoomSchema } from "@/features/join-room";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

export const JoinRoomForm = () => {
  const navigate = useNavigate();
  const joinRoomForm = useForm<JoinRoomSchema>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: {
      roomCode: "",
    },
  });

  const onSubmit = async (data: JoinRoomSchema) => {
    console.log(data);
    const body = JSON.stringify({
      roomCode: data.roomCode,
    });
    const response = await fetch("http://localhost:8080/api/join-room", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    });

    if (response.status !== 200) {
      throw new Error("Something went wrong");
    }

    const room = await response.json();

    sessionStorage.setItem("clientId", room.clientId);

    navigate(`/room/${room.roomId}`);
  };

  return (
    <Form {...joinRoomForm}>
      <form onSubmit={joinRoomForm.handleSubmit(onSubmit)}>
        <FormField
          control={joinRoomForm.control}
          name="roomCode"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel htmlFor="roomId">Room Code</FormLabel>
              <FormControl>
                <Input
                  className="text-lg"
                  maxLength={6}
                  placeholder="Enter a room code"
                  id="roomId"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <Button className="w-full text-lg font-semibold" type="submit">
          Join
        </Button>
      </form>
    </Form>
  );
};
