import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

import { useForm } from "react-hook-form";

export function AddToTask() {
  const form = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add task</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add task</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="mb-4">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <input
                          {...field}
                          defaultValue={field.value || ""}
                          type="text"
                          placeholder="Enter task title"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="mb-4">
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          defaultValue={field.value || ""}
                          placeholder="Enter task title"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="mb-4">
                <FormField
                  control={form.control}
                  name="isCompleted"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Is Completed</FormLabel>
                      <FormControl>
                        <input
                          {...field}
                          defaultValue={field.value || ""}
                          placeholder="Enter task title"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="mb-4">
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <input
                          {...field}
                          defaultValue={field.value || ""}
                          placeholder="Enter task title"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="mb-4">
                <FormField
                  control={form.control}
                  name="priority"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Priority</FormLabel>
                      <FormControl>
                        <input
                          {...field}
                          defaultValue={field.value || ""}
                          placeholder="Enter task title"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="mb-4">
                <FormField
                  control={form.control}
                  name="dueDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Due Date</FormLabel>
                      <FormControl>
                        <input
                          {...field}
                          defaultValue={field.value || ""}
                          placeholder="Enter task title"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit">Submit</Button>
              </DialogFooter>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
