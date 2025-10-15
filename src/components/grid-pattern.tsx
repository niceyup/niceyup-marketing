'use client'

export function GridPatternDemo({ children }: { children?: React.ReactNode }) {
  return (
    <div className="bg-background relative flex  w-full flex-col items-center justify-center overflow-hidden rounded-lg border">
      {children}
    </div>
  )
}
