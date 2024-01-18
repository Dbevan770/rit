import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const CreateRoom = () => {
  const createRoom = async () => {
    const response = await fetch("http://localhost:8080/api/create-room", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        roomName: "test",
      }),
    });

    if (response.status !== 201) {
      throw new Error("Something went wrong");
    }

    const data = await response.json();

    console.log(data);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Room</CardTitle>
        <CardDescription>Create a new room for others to join.</CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          type="button"
          className="w-full text-lg font-semibold"
          onClick={createRoom}
        >
          Create
        </Button>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};
