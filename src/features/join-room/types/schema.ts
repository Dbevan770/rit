import { z } from "zod";

export const schema = z.object({
  roomCode: z
    .string()
    .trim()
    .length(6)
    .regex(/^[0-9]{6}$/),
});

export type JoinRoomSchema = z.infer<typeof schema>;
