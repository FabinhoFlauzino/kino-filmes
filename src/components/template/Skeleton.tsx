import mergeClasses from "@/utils/mergeClasses"

interface SkeletonProps {
  className: string
}

export default function Skeleton({ className }: SkeletonProps) {
  return (
    <div className={mergeClasses(
      "bg-zinc-500/20 animate-pulse",
      className
    )}></div>
  )
}