"use client"

import { Button } from "@/components/ui/button"
import React from "react"

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
        <div className="grid gap-6">
            <form onSubmit={onSubmit}>
                <div className="grid gap-2">
                    <div className="grid gap-2">
                        <label className="sr-only" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            placeholder="name@example.com"
                            type="email"
                            autoComplete="email"
                            autoCorrect="off"
                            disabled={isLoading}
                            className="p-2 border border-input rounded-md focus:ring-primary focus:border-primary"
                        />
                        <input
                            id="password"
                            placeholder="password"
                            type="password"
                            disabled={isLoading}
                            className="p-2 border border-input rounded-md focus:ring-primary focus:border-primary"
                        />
                    </div>
                    <Button disabled={isLoading}>
                        Sign In
                    </Button>
                </div>
            </form>
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t"></span>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                        Don't have an account?
                    </span>
                </div>
            </div>
            <Button
                variant="outline"
                type="button"
                disabled={isLoading}
                onClick={() => { }}>
                Sign up here
            </Button>
        </div>
    )
}