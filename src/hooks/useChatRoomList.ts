function useChatRoomList() {
  const chatRoomList = [
    {
      chatRoomId: 2,
      chatLog: {
        chatLogId: 3,
        content: '채팅방이 생성되었습니다.',
        chatLogTime: '2020-07-21T08:45:33.398',
      },
      category: '자유',
      subject: '제목 테스트',
      headCount: 5,
      createdTime: '2020-07-21T08:45:33.398',
    },
  ];

  return {
    chatRoomList,
  };
}

export default useChatRoomList;
