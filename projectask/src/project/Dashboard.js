import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { PlusCircle, Save, Trash2, CalendarCheck2, User } from 'lucide-react';

const initialItems = [
  { id: 4, title: 'Login Page', tag: 'M', status: 'todo', assignee: 'Alice', dueDate: '2025-04-25' },
  { id: 5, title: 'Dashboard', tag: 'XL', status: 'todo', assignee: 'Bob', dueDate: '2025-04-26' },
  { id: 6, title: 'ProjectTab', tag: 'XL', status: 'todo', assignee: 'Charlie', dueDate: '2025-04-27' },
  { id: 8, title: 'Set up UI elements', tag: 'M', status: 'todo', assignee: 'Diana', dueDate: '2025-04-28' },
  { id: 11, title: 'Backend Setup', tag: '', status: 'todo', assignee: 'Eli', dueDate: '2025-04-29' },
  { id: 2, title: 'Project Tab', tag: 'L', status: 'inprogress', assignee: 'Alice', dueDate: '2025-04-21' },
  { id: 9, title: 'Register Page', tag: 'L', status: 'inprogress', assignee: 'Charlie', dueDate: '2025-04-21' },
  { id: 10, title: 'Reset Password', tag: 'L', status: 'inprogress', assignee: 'Bob', dueDate: '2025-04-23' },
  { id: 7, title: 'Login Page Phase 1', tag: 'S', status: 'done', assignee: 'Diana', dueDate: '2025-04-20' }
];

const statusGroups = {
  todo: 'Todo',
  inprogress: 'In Progress',
  done: 'Done'
};

export default function ProjectDashboard() {
  const [items, setItems] = useState(initialItems);
  const [newTask, setNewTask] = useState({ title: '', tag: '', assignee: '', dueDate: '' });

  const handleAddTask = (status) => {
    const newItem = {
      id: Date.now(),
      ...newTask,
      status,
    };
    setItems(prev => [...prev, newItem]);
    setNewTask({ title: '', tag: '', assignee: '', dueDate: '' });
  };

  return (
    <div className="p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Task Scheduling Dashboard</h1>
        <Button><PlusCircle className="mr-2 h-4 w-4" /> Add status update</Button>
      </div>
      <div className="flex gap-6">
        {Object.entries(statusGroups).map(([key, label]) => (
          <Card key={key} className="w-1/3 bg-muted">
            <CardContent className="p-4">
              <div className="flex justify-between mb-4">
                <span className="font-semibold text-lg">{label}</span>
                <span className="text-sm text-gray-500">{items.filter(i => i.status === key).length}</span>
              </div>
              <ScrollArea className="h-[60vh] pr-2">
                {items.filter(i => i.status === key).map(item => (
                  <div key={item.id} className="bg-white rounded-lg p-3 mb-3 shadow">
                    <div className="font-medium">{item.title}</div>
                    <div className="text-xs text-gray-500">Tag: {item.tag}</div>
                    <div className="text-xs text-gray-500 flex items-center"><User className="h-3 w-3 mr-1" /> {item.assignee}</div>
                    <div className="text-xs text-gray-500 flex items-center"><CalendarCheck2 className="h-3 w-3 mr-1" /> Due: {item.dueDate}</div>
                  </div>
                ))}
              </ScrollArea>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="sm" className="mt-2 w-full">
                    + Add item
                  </Button>
                </DialogTrigger>
                <DialogContent className="space-y-4">
                  <h2 className="font-bold text-lg">Add New Task</h2>
                  <Input placeholder="Title" value={newTask.title} onChange={e => setNewTask({ ...newTask, title: e.target.value })} />
                  <Input placeholder="Tag (S/M/L/XL)" value={newTask.tag} onChange={e => setNewTask({ ...newTask, tag: e.target.value })} />
                  <Input placeholder="Assignee" value={newTask.assignee} onChange={e => setNewTask({ ...newTask, assignee: e.target.value })} />
                  <Input placeholder="Due Date (YYYY-MM-DD)" value={newTask.dueDate} onChange={e => setNewTask({ ...newTask, dueDate: e.target.value })} />
                  <Button onClick={() => handleAddTask(key)}>Add Task to {label}</Button>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex justify-end gap-2">
        <Button variant="ghost"><Trash2 className="h-4 w-4 mr-1" />Discard</Button>
        <Button variant="default"><Save className="h-4 w-4 mr-1" />Save</Button>
      </div>
    </div>
  );
}