<template>
  <ItemWrapper>
    <div>{{ item.name }}</div>
  </ItemWrapper>
</template>

<script>
import { ItemWrapper } from './repositoryItemStyled';

export default {
  props: {
    item: {
      type: Object
    }
  },
  components: {
    ItemWrapper
  }
}
</script>

<style>

</style>
