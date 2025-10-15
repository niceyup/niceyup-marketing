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
              <FormLabel>Why would you like to join the waitlist?</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  className="max-h-32"
                  placeholder="Hey! I'm interested in joining the waitlist because..."
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
                What best describes your role?
              </FormLabel>
              <FormDescription>
                This helps us tailor the experience to you.
              </FormDescription>
              <FormControl>
                <RadioGroup value={field.value} onValueChange={field.onChange}>
                  <FieldLabel htmlFor="developer">
                    <Field orientation="horizontal">
                      <FieldContent>
                        <FieldTitle>I'm a developer</FieldTitle>
                        <FieldDescription>
                          I build software and want to explore how this fits
                          into my workflow.
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
                          I’m exploring how this can help my business or team
                          grow.
                        </FieldDescription>
                      </FieldContent>
                      <RadioGroupItem value="entrepreneur" id="entrepreneur" />
                    </Field>
                  </FieldLabel>
                  <FieldLabel htmlFor="other">
                    <Field orientation="horizontal">
                      <FieldContent>
                        <FieldTitle>I’m just exploring</FieldTitle>
                        <FieldDescription>
                          I’m curious to try it out and see what’s possible.
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
