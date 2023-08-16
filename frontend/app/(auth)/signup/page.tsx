"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Input } from "@/components/ui/input"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

export default function UserAuthForm({ className, ...props }: UserAuthFormProps) {
    const [isLoading, setIsLoading] = React.useState<boolean>(false)

    async function onSubmit(event: React.SyntheticEvent) {
        event.preventDefault()
        setIsLoading(true)

        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    }

    return (
        <div className="flex flex-col gap-6 md:w-[300px]">
            <form onSubmit={onSubmit}>
                <div className="grid gap-2">
                    <div className="grid gap-2">
                        <label className="sr-only" htmlFor="firstName">
                            Name
                        </label>
                        <Input
                            id="firstName"
                            placeholder="First Name"
                            type="text"
                            autoComplete="firstName"
                            autoCorrect="off"
                            disabled={isLoading}
                        />
                        <label className="sr-only" htmlFor="lastName">
                            Email
                        </label>
                        <Input
                            id="lastName"
                            placeholder="Last Name"
                            type="text"
                            autoComplete="lastName"
                            autoCorrect="off"
                            disabled={isLoading}
                        />
                        <label className="sr-only" htmlFor="email">
                            Email
                        </label>
                        <Input
                            id="email"
                            placeholder="name@example.com"
                            type="email"
                            autoComplete="email"
                            autoCorrect="off"
                            disabled={isLoading}
                        />
                        <Input
                            id="password"
                            placeholder="Password"
                            type="password"
                            disabled={isLoading}
                        />
                    </div>
                    <Button disabled={isLoading}>
                        Sign Up
                    </Button>
                </div>
            </form>
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t"></span>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="px-2 text-muted-foreground">
                        Already have an account?
                    </span>
                </div>
            </div>
            <div className="flex justify-center">
                <Link href={"/login"}>Sign in here</Link>
            </div>

        </div>
    )
}