<script setup>
import { shallowRef } from "vue";
import TickIcon from "./TickIcon.vue";
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
  MenubarLabel,
} from "@oku-ui/primitives";

const checkOptions = ["Always Show Bookmarks Bar", "Always Show Toolbar in Fullscreen", "Always Show Full URLs"];
const checkedSelection = shallowRef([checkOptions[1]]);

function setCheckedSelection(option) {
  const cur = checkedSelection.value;
  checkedSelection.value = cur.includes(option) ? cur.filter((el) => el !== option) : cur.concat(option);
}

const radioOptions = ["Andy", "Benoît", "Colm", "Jenna", "Pedro"];
const radioSelection = shallowRef(radioOptions[1]);

function setRadioSelection(value) {
  radioSelection.value = value;
}
</script>

<template>
  <MenubarRoot class="menubar_rootClass">
    <MenubarMenu>
      <MenubarTrigger class="menubar_triggerClass"> File </MenubarTrigger>
      <MenubarPortal force-mount>
        <MenubarContent class="menu_contentClass" :side-offset="2" force-mount>
          <MenubarItem class="menu_itemClass"> New Tab </MenubarItem>
          <MenubarItem class="menu_itemClass"> New Window </MenubarItem>
          <MenubarItem class="menu_itemClass"> New Incognito Window </MenubarItem>
          <MenubarSeparator class="menu_separatorClass" />
          <MenubarSub>
            <MenubarSubTrigger class="menu_subTriggerClass"> Share <span>→</span> </MenubarSubTrigger>
            <MenubarPortal force-mount>
              <MenubarSubContent class="menu_contentClass" :align-offset="-6">
                <MenubarItem class="menu_itemClass"> Email Link </MenubarItem>
                <MenubarItem class="menu_itemClass"> Messages </MenubarItem>
                <MenubarItem class="menu_itemClass"> Airdrop </MenubarItem>
              </MenubarSubContent>
            </MenubarPortal>
          </MenubarSub>
          <MenubarSeparator class="menu_separatorClass" />
          <MenubarItem class="menu_itemClass"> Print… </MenubarItem>
        </MenubarContent>
      </MenubarPortal>
    </MenubarMenu>

    <MenubarMenu>
      <MenubarTrigger class="menubar_triggerClass"> Edit </MenubarTrigger>
      <MenubarPortal force-mount>
        <MenubarContent class="menu_contentClass" :side-offset="2" force-mount>
          <MenubarItem class="menu_itemClass"> Undo </MenubarItem>
          <MenubarItem class="menu_itemClass"> Redo </MenubarItem>
          <MenubarSeparator class="menu_separatorClass" />
          <MenubarSub>
            <MenubarSubTrigger class="menu_subTriggerClass"> Find <span>→</span> </MenubarSubTrigger>

            <MenubarPortal force-mount>
              <MenubarSubContent class="menu_contentClass" :align-offset="-6">
                <MenubarItem class="menu_itemClass"> Search the web… </MenubarItem>
                <MenubarSeparator class="menu_separatorClass" />
                <MenubarItem class="menu_itemClass"> Find… </MenubarItem>
                <MenubarItem class="menu_itemClass"> Find Next </MenubarItem>
                <MenubarItem class="menu_itemClass"> Find Previous </MenubarItem>
                <MenubarSub>
                  <MenubarSubTrigger class="menu_subTriggerClass"> Advanced <span>→</span> </MenubarSubTrigger>

                  <MenubarPortal force-mount>
                    <MenubarSubContent class="menu_contentClass" :align-offset="-6">
                      <MenubarItem class="menu_itemClass"> Regex </MenubarItem>
                      <MenubarItem class="menu_itemClass"> Replace </MenubarItem>
                    </MenubarSubContent>
                  </MenubarPortal>
                </MenubarSub>
              </MenubarSubContent>
            </MenubarPortal>
          </MenubarSub>
          <MenubarSeparator class="menu_separatorClass" />
          <MenubarItem class="menu_itemClass"> Cut </MenubarItem>
          <MenubarItem class="menu_itemClass"> Copy </MenubarItem>
          <MenubarItem class="menu_itemClass"> Paste </MenubarItem>
        </MenubarContent>
      </MenubarPortal>
    </MenubarMenu>

    <MenubarMenu>
      <MenubarTrigger class="menubar_triggerClass"> View </MenubarTrigger>
      <MenubarPortal force-mount>
        <MenubarContent class="menu_contentClass" :side-offset="2" force-mount>
          <MenubarCheckboxItem
            v-for="option in checkOptions"
            :key="option"
            class="menu_itemClass"
            :checked="checkedSelection.includes(option)"
            @update:checked="setCheckedSelection(option)"
          >
            {{ option }}
            <MenubarItemIndicator :style="{ marginLeft: '10px' }" force-mount>
              <TickIcon />
            </MenubarItemIndicator>
          </MenubarCheckboxItem>
          <MenubarSeparator class="menu_separatorClass" />
          <MenubarItem class="menu_itemClass"> Reload </MenubarItem>
          <MenubarItem class="menu_itemClass"> Force Reload </MenubarItem>
          <MenubarSeparator class="menu_separatorClass" />
          <MenubarItem class="menu_itemClass"> Toggle Fullscreen </MenubarItem>
          <MenubarSeparator class="menu_separatorClass" />
          <MenubarItem class="menu_itemClass"> Hide Sidebar </MenubarItem>
        </MenubarContent>
      </MenubarPortal>
    </MenubarMenu>

    <MenubarMenu>
      <MenubarTrigger class="menubar_triggerClass"> Profiles </MenubarTrigger>
      <MenubarPortal force-mount>
        <MenubarContent class="menu_contentClass" :side-offset="2" force-mount>
          <MenubarRadioGroup :value="radioSelection" @update:value="setRadioSelection">
            <MenubarRadioItem v-for="option in radioOptions" :key="option" class="menu_itemClass" :value="option">
              {{ option }}
              <MenubarItemIndicator :style="{ marginLeft: '10px' }" force-mount>
                <TickIcon />
              </MenubarItemIndicator>
            </MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarPortal>
    </MenubarMenu>

    <MenubarMenu>
      <MenubarTrigger class="menubar_triggerClass"> History </MenubarTrigger>
      <MenubarPortal force-mount>
        <MenubarContent class="menu_contentClass" :side-offset="2" force-mount>
          <MenubarLabel class="menu_labelClass"> Work </MenubarLabel>
          <MenubarItem class="menu_itemClass"> Radix </MenubarItem>
          <MenubarItem class="menu_itemClass"> Github </MenubarItem>
          <MenubarItem class="menu_itemClass"> WorkOS </MenubarItem>
          <MenubarLabel class="menu_labelClass"> Community </MenubarLabel>
          <MenubarItem class="menu_itemClass"> Twitter </MenubarItem>
          <MenubarItem class="menu_itemClass"> Discord </MenubarItem>
          <MenubarItem class="menu_itemClass"> Slack </MenubarItem>
        </MenubarContent>
      </MenubarPortal>
    </MenubarMenu>
  </MenubarRoot>
</template>
