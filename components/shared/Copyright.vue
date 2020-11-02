<template>
    <div>
        <span v-if="$i18n.locale =='en'">Copyright © {{new Date().getFullYear()}} Andalusia Wellness, All rights Reserved.</span>
        <span v-if="$i18n.locale =='ar'">©{{new Date().getFullYear()}} جميع الحقوق محفوظة للأندلسية جروب</span>
    </div>
</template>

<script>
export default {
    name: 'Copyright'
}
</script>
