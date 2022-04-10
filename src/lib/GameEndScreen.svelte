<script>
    import RedirectCountDown from './RedirectCountDown.svelte';
</script>

<div>
    <h1>
        Let's go der Hase
        <RedirectCountDown url="https://open.spotify.com/show/6UUIXmp1V0fK4ZpK7vzAbQ" seconds={3} />
    </h1>
</div>

<style>
    div {
        position: absolute;
        z-index: 1000;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        background-color: #fff;
        background-image: url('/images/game-end-background.jpg');
        background-position: center;
        background-size: cover;
    }
</style>
