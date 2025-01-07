"use client"

import { useState, useEffect } from "react"
import { Post } from "./post"
import { CreatePost } from "./create-post"
import { motion, AnimatePresence } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"

// Sample data with added categories
const initialPosts = [
  {
    id: 1,
    author: {
      name: "christelle saublain",
      avatar: "https://winback-academy.org/wp-content/uploads/avatars/7584/673f60fe4e22e-bpfull.png",
      group: "Winbacker"
    },
    content: "Bonjour, est-il possible de soulager à syndrôme de Tietze avec la winback 3? Merci",
    timeAgo: "5 days ago",
    likes: 3,
    category: "Clinical Question",
    tags: ["Winback 3", "Treatment", "Tietze Syndrome"],
    comments: [
      {
        id: 1,
        author: {
          name: "Laura Bellfisio",
          avatar: "https://winback-academy.org/wp-content/uploads/avatars/27/613a24fc99487-bpfull.png"
        },
        content: "Bonjour Christelle, oui, une thérapie avec cette technologie peut vous aider puisqu'elle a un effet anti-inflammatoire et contribue à la régénération des tissus endommagés.",
        timeAgo: "5 days ago"
      },
      {
        id: 2,
        author: {
          name: "Aurore chambaudu",
          avatar: "https://winback-academy.org/wp-content/uploads/avatars/240/61bc71ecc0230-bpthumb.jpg"
        },
        content: "Bonjour\nEffectivement, Cet en diathermie douce puis ret + Hi-tens 25Hz + Drain 10% sur le cartilage costal. Puis mobilisation des côtes en RET ( électrode ou bracelets)",
        timeAgo: "2 days ago"
      }
    ]
  },
  {
    id: 2,
    author: {
      name: "Marc Dupont",
      avatar: "https://winback-academy.org/wp-content/uploads/avatars/27/613a24fc99487-bpfull.png",
      group: "Winbacker"
    },
    content: "Question sur le protocole lombalgie : quelle est la meilleure fréquence de traitement pour des résultats optimaux ?",
    timeAgo: "1 day ago",
    likes: 5,
    category: "Protocol",
    tags: ["Lombalgie", "Treatment Frequency", "Protocol"],
    comments: [
      {
        id: 3,
        author: {
          name: "Sophie Martin",
          avatar: "https://winback-academy.org/wp-content/uploads/avatars/2027/63cc5012aa642-bpfull.jpg"
        },
        content: "Pour la lombalgie chronique, je recommande 2 séances par semaine pendant 3 semaines, puis une séance par semaine en entretien. Utilisez le mode TECAR à 15% en phase aiguë.",
        timeAgo: "1 day ago"
      }
    ]
  }
]

const categories = ["All", "Clinical Question", "Protocol", "Success Story", "Technical Support"]

export function AssistFeed() {
  const [posts, setPosts] = useState(initialPosts)
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")
  const [filteredPosts, setFilteredPosts] = useState(posts)

  useEffect(() => {
    // Simulate loading state
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    let filtered = posts
    
    // Filter by category
    if (activeCategory !== "All") {
      filtered = filtered.filter(post => post.category === activeCategory)
    }
    
    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(post => 
        post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    }
    
    setFilteredPosts(filtered)
  }, [posts, searchQuery, activeCategory])

  const handleNewPost = (content: string, category: string, tags: string[]) => {
    const newPost = {
      id: posts.length + 1,
      author: {
        name: "Current User",
        avatar: "/placeholder.svg?height=40&width=40",
        group: "Winbacker"
      },
      content,
      timeAgo: "Just now",
      likes: 0,
      category,
      tags,
      comments: []
    }
    setPosts([newPost, ...posts])
  }

  if (loading) {
    return (
      <div className="px-4 py-8">
        <div className="max-w-3xl mx-auto space-y-8 animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3"></div>
          <div className="h-40 bg-gray-200 rounded"></div>
          <div className="h-40 bg-gray-200 rounded"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8 text-primary"
      >
        Winback Academy Community
      </motion.h1>
      
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="flex gap-4 items-center mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Rechercher des posts..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <Tabs defaultValue="All" className="mb-6">
          <TabsList className="mb-4">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <CreatePost onSubmit={handleNewPost} categories={categories.filter(c => c !== "All")} />
        
        <AnimatePresence mode="popLayout">
          {filteredPosts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <Post post={post} />
            </motion.div>
          ))}
          
          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-8 text-gray-500"
            >
              Aucun post trouvé
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
