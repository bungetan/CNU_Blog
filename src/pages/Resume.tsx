const Resume = () => {
  return (
    <>
      <div>
        <h3>시험 기간</h3>
        <div style={{ display: 'flex', gap: '20px' }}>
          <img src="process.env.PUBLIC_URL + '/image1.png'" style={{ width: '150px' }} />
          <p>비록 시험 기간이지만 학생회 친구들이랑 막동을 해버렸다,,,,역시 충대 막동은 짜릿해!</p>
        </div>
      </div>

      <div>
        <h3>23학번 신입생 응애들 밥 사주기</h3>
        <div style={{ display: 'flex', gap: '20px' }}>
          <img src="process.env.PUBLIC_URL + '/image2.jpg" style={{ width: '150px' }} />
          <p>23학번 새내기들이 19학번 망령에게 밥을 사달라고 해서 감격스러운 마음에 알바하는 곳에서 밥을 사줬다ㅎ</p>
        </div>
      </div>
    </>
  );
};

export default Resume;
