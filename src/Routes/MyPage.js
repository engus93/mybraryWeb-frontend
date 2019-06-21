import React, { useState } from "react";
import styled from "styled-components";
import ListTitle from "./../Components/ListTitle";
import AnimationInput from "./../Components/AnimationInput";
import useInput from "../Hooks/useInput";
import { useQuery, useMutation } from "react-apollo-hooks";
import { gql } from "apollo-boost";
import Loader from "../Components/Loader";
import { toast } from "react-toastify";

const MyPage = styled.div`
  background-color: ${props => props.theme.whiteBG};
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Container = styled.section`
  width: ${props => props.theme.wrapperWidth};
  margin: 0 auto;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const SortWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;

const EditBox = styled.article`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #fff;
  margin: 20px auto;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const EditTitle = styled.h5`
  font-size: 20px;
  margin-bottom: 50px;
  display: inline-block;
  padding: ${props =>
    props.position === "left" ? "5px 20px 5px 0" : "5px 0 5px 20px"};
  border-right: ${props =>
    props.position === "left" ? "#aaa 1px solid" : "none"};
  color: ${props => {
    if (
      (props.actionEdit && props.position === "left") ||
      (!props.actionEdit && props.position === "right")
    ) {
      return props.theme.mainColor;
    }
    return "black";
  }};
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;

const EditInput = styled(AnimationInput)`
  margin-top: 20px;
  display: block;
`;

const SortBox = styled.div`
  text-align: ${props => props.sort};
`;

const InputBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const EditBtn = styled.button`
  margin-top: 40px;
  padding: 7px 12px;
  border-radius: 15px;
  background-color: ${props => props.theme.mainColor};
  color: white;
  transition: 0.3s;
  :hover {
    opacity: 0.7;
  }
`;

const LeaveText = styled.span`
  text-align: center;
  padding: 50px 20px;
  line-height: 30px;
  font-size: 18px;
`;

const PointText = styled.strong`
  color: red;
`;

// Apollo Client
const ME = gql`
  {
    me {
      email
      username
    }
  }
`;

const DELETE_ACCOUNT = gql`
  mutation {
    deleteAccount {
      username
    }
  }
`;
const LOG_OUT = gql`
  mutation userLogOut {
    userLogOut @client
  }
`;
export default () => {
  // My Info Query
  const {
    loading,
    data: { me }
  } = useQuery(ME);
  // Log Out Mutation
  const MutationLogOut = useMutation(LOG_OUT);

  const MutationDeleteAccount = useMutation(DELETE_ACCOUNT);

  const [actionEdit, setActionEdit] = useState(true);

  const pw = useInput("");
  const rePw = useInput("");
  const username = useInput("");

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <MyPage>
          <Container>
            <ListTitle title={"My Page"} />
            <SortWrapper>
              <EditBox>
                {actionEdit && (
                  <>
                    <SortBox sort={"left"}>
                      <EditTitle
                        actionEdit={actionEdit}
                        position={"left"}
                        onClick={() => setActionEdit(true)}
                      >
                        Edit My Info
                      </EditTitle>
                      <EditTitle
                        actionEdit={actionEdit}
                        position={"right"}
                        onClick={() => setActionEdit(false)}
                      >
                        Leave Mybrary
                      </EditTitle>
                    </SortBox>
                    <InputBoxWrapper>
                      {me && me.email && (
                        <EditInput
                          id={"editEmail"}
                          value={me.email}
                          labelText={"Email"}
                          type="text"
                          disabled={true}
                        />
                      )}
                      <EditInput
                        {...pw}
                        id={"editPw"}
                        labelText={"Password"}
                        type="text"
                      />
                      <EditInput
                        {...rePw}
                        id={"editRePw"}
                        labelText={"Re Password"}
                        type="text"
                      />
                      <EditInput
                        {...username}
                        id={"editUsername"}
                        labelText={"User Name"}
                        type="text"
                      />
                    </InputBoxWrapper>
                    <SortBox sort={"right"}>
                      <EditBtn>수정하기</EditBtn>
                    </SortBox>
                  </>
                )}
                {!actionEdit && (
                  <>
                    <SortBox sort={"left"}>
                      <EditTitle
                        actionEdit={actionEdit}
                        position={"left"}
                        onClick={() => setActionEdit(true)}
                      >
                        Edit My Info
                      </EditTitle>
                      <EditTitle
                        actionEdit={actionEdit}
                        position={"right"}
                        onClick={() => setActionEdit(false)}
                      >
                        Leave Mybrary
                      </EditTitle>
                    </SortBox>
                    <InputBoxWrapper>
                      <LeaveText>
                        Mybrary를 정말 떠나시겠습니까?
                        <br />
                        지금까지의 <PointText>모든 활동이 삭제</PointText>
                        됩니다.
                      </LeaveText>
                    </InputBoxWrapper>
                    <SortBox sort={"right"}>
                      <EditBtn
                        onClick={async () => {
                          if (window.confirm("정말 삭제하시겠습니까?")) {
                            const {
                              data: {
                                deleteAccount: { username }
                              }
                            } = await MutationDeleteAccount();
                            toast.success(`안녕히가세요 ${username}님 😃`);
                            setTimeout(async () => {
                              await MutationLogOut();
                            }, 3000);
                          }
                        }}
                      >
                        탈퇴하기
                      </EditBtn>
                    </SortBox>
                  </>
                )}
              </EditBox>
            </SortWrapper>
          </Container>
        </MyPage>
      )}
    </>
  );
};
