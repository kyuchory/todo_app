import React, { useState } from 'react';
import './App.css';
import TodoTemplate from './TodoTemplate';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';

function App() {
   const [todos, setTodos] = useState([
      {
         id: 1,
         text: '리액트의 기초 알아보기',
         checked: true,
      },
      {
         id: 2,
         text: '컴포넌트 스타일링 해보기',
         checked: true,
      },
      {
         id: 3,
         text: '일정 관리 앱 만들어보기',
         cheked: false,
      },
   ]);

   return (
      <div>
         <TodoTemplate>
            <TodoInsert />
            <TodoList todos={todos}/>
         </TodoTemplate>
      </div>
   );
}

export default App;
