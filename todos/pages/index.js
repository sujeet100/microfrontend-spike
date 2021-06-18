import Head from 'next/head'
import Todos from '../components/todos.js'
import Layout from '../components/layout.js';
import {AddTodo} from '../components/add-todo.js';
//const AddTodo = (await import("addTodo/AddTodo")).default;

export default function Home() {
  return (
      <Layout home>
        <Head>
          <title>My Todos</title>
        </Head>
          <AddTodo/>
          <Todos/>
      </Layout>
  )
}
