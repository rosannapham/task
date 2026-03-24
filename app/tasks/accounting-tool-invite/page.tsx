'use client';
import { FullScreenModal } from "@/components/FullScreenModal";
import { useAccountingToolInvitePage } from "./useAccounting-tool-invite";
import { useRouter } from "next/navigation";
import {  Button, Callout, Card, Flex, IconButton, Radio, Select, Text, TextField } from "@radix-ui/themes";
import { Box, ClipboardCopy, ClipboardCopyIcon } from "lucide-react";
import { BookmarkIcon, CopyIcon } from "@radix-ui/react-icons";



export default function () {
  const {task, handleSelectCard, selectedId, options } = useAccountingToolInvitePage();
  const router = useRouter()
  const handleCopy = (value:string) => {
    navigator.clipboard.writeText(value);
  };
if (task?.completed_at != null) return <div>completed</div>

if (!task) return <></>
    return <FullScreenModal
    onClose={() => {router.push(`/tasks`)}}
    title={task.task_name}
    actions={<button>Done</button>}
  >

<Flex direction="column" gap="4" className="max-w-md mx-auto p-4 border rounded-lg bg-gray-50">
  
      <Text as="div" size="3" weight="bold" className="mb-4">
        Do you want to proceed?
      </Text>

      <Flex direction="column" gap="3">
  {options.map((option) => {
    const isSelected = selectedId === option.id;

    return (
      <Card asChild key={option.id} variant="surface">
        <>
        <button
          type="button"
          onClick={() => handleSelectCard(option.id)}
          className={`
            w-full text-left px-4 py-3 rounded-md border transition-colors duration-200 mb-2
            hover:bg-gray-100 active:bg-gray-200  
          `}
        >
          {option.label}
        </button>
        </>
      </Card>
    );
  })}
</Flex>
    </Flex>
    <div>{selectedId}</div>
    <Flex direction="column" gap="6" className="max-w-md mx-auto p-4 border rounded-lg bg-gray-50">
  
    <Text as="div" className="text-lg font-bold text-gray-900">
  Invite Novabook to Xero
</Text>

<Text as="div" size="2" weight="regular" >
  1. On Xero, go to Settings, then Users.
</Text>

<Text as="div" size="2" weight="regular">
  2. Invite a new user, using the details below
</Text>
<Flex direction="column" gap="6" className="max-w-md mx-auto p-4 border rounded-lg bg-gray-50"> 
  <Flex direction="row" gap="6">
  <Flex direction="column" gap="3">
			<label>
				<Text as="div" size="2" mb="1" weight="bold">
					First Name
				</Text>

        <Box >
        <TextField.Root
      value={"Novabook"}
      readOnly
      end={
        <IconButton size="1" variant="ghost" onClick={handleCopy}>
          <ClipboardCopyIcon className="h-4 w-4" />
        </IconButton>
      }
      style={{ maxWidth: "250px" }}
    />
    </Box>
   
   
			</label>
      </Flex>
      <Flex direction="column" gap="3">
			<label>
				<Text as="div" size="2" mb="1" weight="bold">
					Last Name
				</Text>
				<TextField.Root
					value="Books"
				/>
              <IconButton size="1" variant="ghost" onClick={handleCopy}>
          <CopyIcon className="h-4 w-4" />
        </IconButton>
      
			</label>
      </Flex>
      <Flex direction="column" gap="3">
			<label>
				<Text as="div" size="2" mb="1" weight="bold">
					Email address
				</Text>
				<TextField.Root
					value="books@novabook.com"
				/>
			</label>
      </Flex>
  </Flex>
</Flex>

    </Flex>

    <Button>
	<BookmarkIcon /> Bookmark
</Button>

  </FullScreenModal>
    
  }