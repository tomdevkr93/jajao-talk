export type ChatRoom = {
  chatRoomId: number;
  chatLog: {
    chatLogId: number;
    content: string;
    chatLogTime: string;
  };
  category: string;
  subject: string;
  headCount: number;
  createdTime: string;
};

export type Category = {
  categoryCode: string;
  category: string;
};
