import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { JoinRoomForm } from "@/features/join-room/components";

export const JoinRoom = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Join Room</CardTitle>
        <CardDescription>Enter a room code to join a room</CardDescription>
      </CardHeader>
      <CardContent>
        <JoinRoomForm />
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};
