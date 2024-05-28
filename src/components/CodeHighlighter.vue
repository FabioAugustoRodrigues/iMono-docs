<template>
    <div>
        <pre><code ref="code" class="php">{{ code }}</code></pre>
    </div>
</template>

<script setup>
import { defineProps, onMounted } from 'vue';

const props = defineProps({
    code: {
        type: String,
        required: true
    }
});
</script>

<style scoped>
pre {
    background-color: #f8f8f8;
    border: 1px solid #ccc;
    padding: 10px;
    overflow: auto;
}

code.php {
    font-family: Consolas, "Courier New", Courier, monospace;
}
</style>
