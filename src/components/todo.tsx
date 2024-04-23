"use client"

import { addTask, removeTask } from "@/redux/slices/todoSlice"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

export default function Todo() {
    const dispatch = useDispatch()
    const tasks = useSelector((state: any) => state.tasks)
    console.log(tasks)
    const [newTask, setNewTask] = useState("")
    const handleAddTask = () => {
        if (newTask.trim() !== "") {
            dispatch(addTask(newTask))
        }
        setNewTask("")
    }
    const handleRemoveTask = (id: string) => {
        dispatch(removeTask(id))

    }
    return (
        <div className="mx-auto w-1/2 p-6">
            <div className="grid grid-cols-2">
                <input type="text" className="border p-2" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
                <button className="bg-yellow-500" onClick={handleAddTask} type="button">Add Task</button>
            </div>
            <div className="mt-6 grid gap-2">
                {tasks.map((task: any, i: number) => {
                    return (
                        <div key={task.id} className=" border grid grid-cols-5">
                            <div className="p-2 col-span-4">{i + 1}. {task.title} </div>
                            <button className="bg-red-700 text-gray-100" onClick={() => handleRemoveTask(task.id)} >Delete</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}