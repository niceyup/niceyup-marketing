'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { LoaderCircleIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { joinWaitlist } from '@/actions/join-waitlist'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldSeparator,
  FieldTitle,
} from './ui/field'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form'
import { Input } from './ui/input'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Textarea } from './ui/textarea'

const formSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: 'Name must be at least 2 characters.' })
    .or(z.literal('')),
  email: z.email({ message: 'Invalid email address.' }),
  message: z
    .string()
    .trim()
    .max(256, { message: 'Message must be at most 256 characters.' }),
  occupation: z.enum(['developer', 'entrepreneur', 'other']),
})

export function JoinWaitlistForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', email: '', message: '', occupation: 'other' },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const result = await joinWaitlist(values)
    if (result.status === 'success') toast.success(result.message)
    if (result.status === 'error') toast.error(result.message)
    form.reset()
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col w-full gap-8 relative"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your full name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="John Doe" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="after:text-muted-foreground after:content-['*']">
                Your best email address
              </FormLabel>
              <FormControl>
                <Input {...field} placeholder="john.doe@example.com" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Why do you want to join the waitlist?</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  className="max-h-32"
                  placeholder="I want to join because..."
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FieldSeparator />

        <FormField
          control={form.control}
          name="occupation"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="after:text-muted-foreground after:content-['*']">
                What is your occupation?
              </FormLabel>
              <FormDescription>
                This helps us understand our users better.
              </FormDescription>
              <FormControl>
                <RadioGroup value={field.value} onValueChange={field.onChange}>
                  <FieldLabel htmlFor="developer">
                    <Field orientation="horizontal">
                      <FieldContent>
                        <FieldTitle>I'm a developer</FieldTitle>
                        <FieldDescription>
                          I'm a software developer looking to integrate this
                          into my projects.
                        </FieldDescription>
                      </FieldContent>
                      <RadioGroupItem value="developer" id="developer" />
                    </Field>
                  </FieldLabel>
                  <FieldLabel htmlFor="entrepreneur">
                    <Field orientation="horizontal">
                      <FieldContent>
                        <FieldTitle>I'm an entrepreneur</FieldTitle>
                        <FieldDescription>
                          I'm an entrepreneur interested in using this for my
                          business.
                        </FieldDescription>
                      </FieldContent>
                      <RadioGroupItem value="entrepreneur" id="entrepreneur" />
                    </Field>
                  </FieldLabel>
                  <FieldLabel htmlFor="other">
                    <Field orientation="horizontal">
                      <FieldContent>
                        <FieldTitle>I want to try it out</FieldTitle>
                        <FieldDescription>
                          I'm curious to explore and see how it works.
                        </FieldDescription>
                      </FieldContent>
                      <RadioGroupItem value="other" id="other" />
                    </Field>
                  </FieldLabel>
                </RadioGroup>
              </FormControl>
            </FormItem>
          )}
        />

        <Button type="submit" disabled={form.formState.isSubmitting}>
          <LoaderCircleIcon
            className={cn('mr-2 size-4 animate-spin', {
              'sr-only': !form.formState.isSubmitting,
            })}
          />
          <span className="lowercase">Join the waitlist</span>
        </Button>
      </form>
    </Form>
  )
}
