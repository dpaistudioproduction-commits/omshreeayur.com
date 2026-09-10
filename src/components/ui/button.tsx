import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-full border border-transparent bg-clip-padding font-bold transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-[#517B32] text-white hover:bg-[#6F9940] shadow-md border-[#6F9940]/40",
        outline: "border-[#517B32] bg-transparent text-[#517B32] hover:bg-[#E3D8C1]",
        dark: "bg-[#402816] text-[#F7F1E1] hover:bg-[#66371B] border-[#DBCFA8]/20 shadow-md",
        secondary: "bg-white text-[#66371B] border-[#DBCFA8] hover:border-[#517B32] hover:bg-[#E3D8C1]/40 shadow-sm",
        ghost: "hover:bg-[#E3D8C1]/50 text-[#66371B]",
        link: "text-[#517B32] underline-offset-4 hover:underline",
        glass: "border-white/30 text-white bg-black/20 hover:bg-white/10 hover:border-white/50 backdrop-blur-sm",
      },
      size: {
        default: "h-11 px-6 text-sm",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-10 text-base",
        icon: "size-10",
        "icon-sm": "size-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  nativeButton,
  render,
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  const isCustomRender = Boolean(render)
  return (
    <ButtonPrimitive
      data-slot="button"
      nativeButton={nativeButton !== undefined ? nativeButton : !isCustomRender}
      render={render}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
