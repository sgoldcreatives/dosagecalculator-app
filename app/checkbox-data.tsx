"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const tagFilters = [
  {
    id: "forDog",
    label: "For Dogs",
  },
  {
    id: "forCat",
    label: "For Cats",
  },
  {
    id: "sx",
    label: "Sx",
  },
  {
    id: "tx",
    label: "Tx",
  },
  {
    id: "pain",
    label: "Pain",
  },
  {
    id: "antibiotic",
    label: "Antibiotic",
  },
  {
    id: "steroid",
    label: "Steroid",
  },
] as const;
function onSubmit(data: z.infer<typeof FormSchema>) {
  console.log(data.tagFilters)
}



const FormSchema = z.object({
  tagFilters: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
});

export function CheckboxReactHookFormMultiple() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      tagFilters: [
        "forDog",
        "forCat",
        "sx",
        "tx",
        "pain",
        "antibiotic",
        "steroid",
      ],
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="tagFilters"
          render={() => (
            <FormItem>
              {tagFilters.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="tagFilters"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row tagFilters-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
