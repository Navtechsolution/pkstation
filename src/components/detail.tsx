import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Education from "./education"
import Experience from "./experience"
import Skills from "./skills"
import Project from "./project"


export function Detail() {
  return (
    
    <Tabs defaultValue="education" className="w-full p-3">
      <TabsList className="grid w-full grid-cols-4">
           {/* Tabs Trigger Button */}
        <TabsTrigger value="education">Education</TabsTrigger>
        <TabsTrigger value="experience">Experience</TabsTrigger>
        <TabsTrigger value="skills">Skills</TabsTrigger>
        <TabsTrigger value="project">Project</TabsTrigger>
      </TabsList>
      {/* Tabs Content here */}
          {/* Education*/}
      <TabsContent value="education">
       <Education/>
      </TabsContent>
      {/* Experience*/}
      <TabsContent value="experience">
       <Experience/>
      </TabsContent>
      {/* skills*/}
      <TabsContent value="skills">
       <Skills/>
      </TabsContent>

      {/*Project*/}
      <TabsContent value="project">
       <Project/>
      </TabsContent>
    </Tabs>
  )
}
