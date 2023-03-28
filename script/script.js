const char = createKnight('Soldier');
const Monster = createLittleMonster();

stage.Start(
    char,
    Monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
);


function resetPage() {
    location.reload();
}