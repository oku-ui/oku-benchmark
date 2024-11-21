<script setup lang="ts">
import { ref } from "vue";
import {
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarItemIndicator,
  MenubarMenu,
  MenubarPortal,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarRoot,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "reka-ui";

const currentMenu = ref("");
const checkboxOne = ref(false);
const checkboxTwo = ref(false);
const person = ref("pedro");
function handleClick() {
  // eslint-disable-next-line no-alert
  alert("hello!");
}
</script>

<template>
  <MenubarRoot v-model="currentMenu" class="MenubarRoot">
    <MenubarMenu value="file">
      <MenubarTrigger class="MenubarTrigger"> File </MenubarTrigger>
      <MenubarPortal force-mount>
        <MenubarContent class="MenubarContent" align="start" :side-offset="5" :align-offset="-3" force-mount>
          <MenubarItem class="MenubarItem">
            New Tab
            <div class="RightSlot">⌘ T</div>
          </MenubarItem>
          <MenubarItem class="MenubarItem">
            New Window
            <div class="RightSlot">⌘ N</div>
          </MenubarItem>
          <MenubarItem class="MenubarItem" disabled> New Incognito Window </MenubarItem>
          <MenubarSeparator class="MenubarSeparator" />
          <MenubarSub>
            <MenubarSubTrigger class="MenubarItem">
              Share
              <div class="RightSlot">icon</div>
            </MenubarSubTrigger>
            <MenubarPortal force-mount>
              <MenubarSubContent class="MenubarContent" :align-offset="-5" force-mount>
                <MenubarItem class="MenubarItem"> Email Link </MenubarItem>
                <MenubarItem class="MenubarItem"> Messages </MenubarItem>
                <MenubarItem class="MenubarItem"> Notes </MenubarItem>
              </MenubarSubContent>
            </MenubarPortal>
          </MenubarSub>
          <MenubarSeparator class="MenubarSeparator" />
          <MenubarItem class="MenubarItem">
            Print…
            <div class="RightSlot">⌘ P</div>
          </MenubarItem>
        </MenubarContent>
      </MenubarPortal>
    </MenubarMenu>

    <MenubarMenu>
      <MenubarTrigger class="MenubarTrigger"> Edit </MenubarTrigger>
      <MenubarPortal force-mount>
        <MenubarContent class="MenubarContent" align="start" :side-offset="5" :align-offset="-3" force-mount>
          <MenubarItem class="MenubarItem">
            Undo
            <div class="RightSlot">⌘ Z</div>
          </MenubarItem>
          <MenubarItem class="MenubarItem">
            Redo
            <div class="RightSlot">⇧ ⌘ Z</div>
          </MenubarItem>
          <MenubarSeparator class="MenubarSeparator" />
          <MenubarSub>
            <MenubarSubTrigger class="MenubarItem">
              Find
              <div class="RightSlot">icon</div>
            </MenubarSubTrigger>

            <MenubarPortal force-mount>
              <MenubarSubContent class="MenubarContent" :align-offset="-5" force-mount>
                <MenubarItem class="group MenubarItem"> Search the web… </MenubarItem>
                <MenubarSeparator class="MenubarSeparator" />
                <MenubarItem class="MenubarItem"> Find… </MenubarItem>
                <MenubarItem class="MenubarItem"> Find Next </MenubarItem>
                <MenubarItem class="MenubarItem"> Find Previous </MenubarItem>
              </MenubarSubContent>
            </MenubarPortal>
          </MenubarSub>
          <MenubarSeparator class="MenubarSeparator" />
          <MenubarItem class="MenubarItem"> Cut </MenubarItem>
          <MenubarItem class="MenubarItem"> Copy </MenubarItem>
          <MenubarItem class="MenubarItem"> Paste </MenubarItem>
        </MenubarContent>
      </MenubarPortal>
    </MenubarMenu>

    <MenubarMenu>
      <MenubarTrigger class="MenubarTrigger"> View </MenubarTrigger>
      <MenubarPortal force-mount>
        <MenubarContent class="MenubarContent" align="start" :side-offset="5" :align-offset="-14" force-mount>
          <MenubarCheckboxItem v-model="checkboxOne" class="MenubarCheckboxItem">
            <MenubarItemIndicator class="MenubarItemIndicator"> Icon </MenubarItemIndicator>
            Show Bookmarks
            <div class="RightSlot">⌘+B</div>
          </MenubarCheckboxItem>
          <MenubarCheckboxItem v-model="checkboxTwo" class="MenubarCheckboxItem">
            <MenubarItemIndicator class="MenubarItemIndicator"> Icon </MenubarItemIndicator>
            Show Full URLs
          </MenubarCheckboxItem>
          <MenubarSeparator class="MenubarSeparator" />
          <MenubarItem class="MenubarItem">
            Reload
            <div class="RightSlot">⌘ R</div>
          </MenubarItem>
          <MenubarItem class="MenubarItem" disabled>
            Force Reload
            <div class="RightSlot">⇧ ⌘ R</div>
          </MenubarItem>
          <MenubarSeparator class="MenubarSeparator" />
          <MenubarItem class="MenubarItem"> Toggle Fullscreen </MenubarItem>
          <MenubarSeparator class="MenubarSeparator" />
          <MenubarItem class="MenubarItem"> Hide Sidebar </MenubarItem>
        </MenubarContent>
      </MenubarPortal>
    </MenubarMenu>

    <MenubarMenu>
      <MenubarTrigger class="MenubarTrigger"> Profiles </MenubarTrigger>
      <MenubarPortal force-mount>
        <MenubarContent class="MenubarContent" align="start" :side-offset="5" :align-offset="-14" force-mount>
          <MenubarRadioGroup v-model="person">
            <MenubarRadioItem class="MenubarCheckboxItem" value="pedro">
              <MenubarItemIndicator class="MenubarItemIndicator"> Icon </MenubarItemIndicator>
              Pedro Duarte
            </MenubarRadioItem>
            <MenubarRadioItem class="MenubarCheckboxItem" value="colm">
              <MenubarItemIndicator class="MenubarItemIndicator"> Icon </MenubarItemIndicator>
              Colm Tuite
            </MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator class="MenubarSeparator" />
          <MenubarItem class="MenubarItem" @click="handleClick"> Edit… </MenubarItem>
          <MenubarSeparator class="MenubarSeparator" />
          <MenubarItem class="MenubarItem"> Add Profile… </MenubarItem>
        </MenubarContent>
      </MenubarPortal>
    </MenubarMenu>
  </MenubarRoot>
</template>
