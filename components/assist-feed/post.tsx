"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThumbsUp, MessageSquare } from "lucide-react"

interface Author {
  name: string
  avatar: string
  group?: string
}

interface Comment {
  id: number
  author: Author
  content: string
  timeAgo: string
}

interface Post {
  id: number
  author: Author
  content: string
  timeAgo: string
  likes: number
  category: string
  tags: string[]
  comments: Comment[]
}

interface PostProps {
  post: Post
}

export function Post({ post }: PostProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [showComments, setShowComments] = useState(false)
  const [localLikes, setLocalLikes] = useState(post.likes)

  const toggleLike = () => {
    setIsLiked(!isLiked)
    setLocalLikes(isLiked ? localLikes - 1 : localLikes + 1)
  }

  return (
    <Card className="p-6">
      <div className="flex items-start space-x-4">
        <Avatar>
          <AvatarImage src={post.author.avatar} alt={post.author.name} />
          <AvatarFallback>{post.author.name[0]}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <h3 className="font-semibold">{post.author.name}</h3>
            {post.author.group && (
              <Badge variant="secondary">{post.author.group}</Badge>
            )}
            <span className="text-sm text-muted-foreground">• {post.timeAgo}</span>
          </div>
          
          <div className="mt-2">
            <Badge variant="outline" className="mb-2">{post.category}</Badge>
            <p className="text-sm mt-2">{post.content}</p>
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center space-x-4 mt-4">
            <Button
              variant="ghost"
              size="sm"
              className={isLiked ? "text-primary" : ""}
              onClick={toggleLike}
            >
              <ThumbsUp className="h-4 w-4 mr-1" />
              {localLikes}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowComments(!showComments)}
            >
              <MessageSquare className="h-4 w-4 mr-1" />
              {post.comments.length}
            </Button>
          </div>

          {showComments && (
            <div className="mt-4 space-y-4">
              {post.comments.map((comment) => (
                <div key={comment.id} className="flex space-x-3 pl-6 border-l-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={comment.author.avatar} alt={comment.author.name} />
                    <AvatarFallback>{comment.author.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h4 className="text-sm font-semibold">{comment.author.name}</h4>
                      <span className="text-xs text-muted-foreground">• {comment.timeAgo}</span>
                    </div>
                    <p className="text-sm mt-1">{comment.content}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Card>
  )
}
