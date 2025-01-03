import React, { useState } from "react";
import styled from "styled-components";

interface HostAddProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HostAdd({ isOpen, onClose }: HostAddProps) {
  return (
    <ModalOverlay style={{ display: isOpen ? "flex" : "none" }}>
      <ModalContainer>
        <ModalHeader>
          <h2>채널 생성하기</h2>
          <CloseButton onClick={onClose}>×</CloseButton>
        </ModalHeader>
        <ModalBody>
          <Label>채널 제목</Label>
          <Input type="text" placeholder="채널 제목을 입력해주세요." />
          <Label>카테고리 선택하기</Label>
          <Select>
            <option value="">카테고리</option>
            <option value="1">공부</option>
            <option value="2">코딩</option>
          </Select>
          <Label>내 재생목록에서 가져오기</Label>
          <Select>
            <option value="">재생목록 선택하기</option>
            <option value="1">재생목록 1</option>
            <option value="2">재생목록 2</option>
          </Select>
          {/* <Label>채널 최대 인원 수</Label>
          <RadioGroup>
            {["5명", "15명", "20명", "25명"].map((option) => (
              <RadioButton key={option}>
                <input type="radio" name="maxUsers" value={option} />
                <span>{option}</span>
              </RadioButton>
            ))}
          </RadioGroup> */}
          <Label>썸네일</Label>
          <SmallLabel>* 썸네일은 재생목록 첫번째 이미지로 자동 선택됩니다.</SmallLabel>
          <ThumbnailPreview>
            <span>재생목록 1 썸네일</span>
          </ThumbnailPreview>
        </ModalBody>
        <ModalFooter>
          <SubmitButton>생성</SubmitButton>
        </ModalFooter>
      </ModalContainer>
    </ModalOverlay>
  );
}

// Styled Components
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  width: 400px;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #e5e5e5;

  h2 {
    font-size: 18px;
    font-weight: 600;
    margin-left: 10px;
  }
`;

const CloseButton = styled.button`
  background: none;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
  }
`;

const ModalBody = styled.div`
  padding: 16px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
  display: block;
`;

const SmallLabel = styled.label`
  font-size: 10px;
  font-weight: 600;
  margin-bottom: 8px;
  display: block;
  color: var(--color-primary);
`;

// const RadioGroup = styled.div`
//   display: flex;
//   gap: 8px;
//   margin-bottom: 12px;
// `;

// const RadioButton = styled.label`
//   display: flex;
//   align-items: center;
//   gap: 4px;

//   input {
//     margin: 0;
//   }

//   span {
//     font-size: 14px;
//   }
// `;

const ThumbnailPreview = styled.div`
  width: 100%;
  height: 150px;
  border: 1px solid #ddd;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--color-primary-50);
  margin-bottom: 12px;

  span {
    font-size: 14px;
    color: #999;
  }
`;

const ModalFooter = styled.div`
  padding: 12px;
  border-top: 1px solid #e5e5e5;
  display: flex;
  justify-content: flex-end;
`;

const SubmitButton = styled.button`
  padding: 8px 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: var(--color-white);
  cursor: pointer;

  &:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
  }
`;
