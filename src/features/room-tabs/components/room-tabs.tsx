import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { JoinRoom } from "@/features/join-room/components";
import { CreateRoom } from "@/features/create-room/components";

export const RoomTabs = () => {
  return (
    <Tabs defaultValue="join-room" className="w-[400px] h-[500px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="join-room">Join</TabsTrigger>
        <TabsTrigger value="create-room">Create</TabsTrigger>
      </TabsList>
      <TabsContent value="join-room">
        <JoinRoom />
      </TabsContent>
      <TabsContent value="create-room">
        <CreateRoom />
      </TabsContent>
    </Tabs>
  );
};
