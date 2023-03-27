class Keyboard {

    constructor (_value = 'normal') {
        this.status = _value;
        this.buffer = new Buffer();
        this.display = document.createElement('div');
        if (this.status == 'normal') this.dataKeyboard = this.renderLetterKeyboard();
        if(this.status == 'number') this.dataKeyboard = this.renderNumberKeyboard();
        if(this.status == 'character') this.dataKeyboard = this.renderCharacterKeyboard();
    }

    renderLetterKeyboard() {
            let initKey = {
                a:new letter('a'),
                b:new letter('b'),
                c:new letter('c'),
                d:new letter('d'),
                e:new letter('e'),
                f:new letter('f'),
                g:new letter('g'),
                h:new letter('h'),
                i:new letter('i'),
                j:new letter('j'),
                k:new letter('k'),
                l:new letter('l'),
                m:new letter('m'),
                n:new letter('n'),
                o:new letter('o'),
                p:new letter('p'),
                q:new letter('q'),
                r:new letter('r'),
                s:new letter('s'),
                t:new letter('t'),
                u:new letter('u'),
                v:new letter('v'),
                w:new letter('w'),
                x:new letter('x'),
                y:new letter('y'),
                z:new letter('z'),
                capslock: new capslockNode('capslock'),
                delete: new deleteNode('Delete'),
                space: new spaceNode('space'),
                switchCharacter: new switchCharacter('?123'),
                comma: new character(','),
                dot: new character('.'),
                enter: new enterNode('Enter')
            }
            for (const item in initKey) {
                initKey[item].node.addEventListener('click', () => {
                    this.buffer.addToBuffer(initKey[item].value)
                })
            }
            return initKey;
    }
    
    renderNumberKeyboard() {
            let initKey = {
                one: new character('1'),
                two: new character('2'),
                three: new character('3'),
                four: new character('4'),
                five: new character('5'),
                six: new character('6'),
                seven: new character('7'),
                eight: new character('8'),
                nine: new character('9'),
                zero: new character('0'),
                acong: new character('@'),
                thang: new character('#'),
                gachDuoi: new character('_'),
                snguoc: new character('&'),
                tru: new character('-'),
                cong: new character('+'),
                moNgoac: new character('('),
                dongNgoac: new character(')'),
                gachCheo: new character('/'),
                dauSao: new character('*'),
                nhayDoi: new character('"'),
                nhayDon: new character("'"),
                haiCham: new character(':'),
                champhay: new character(';'),
                chamThan: new character('!'),
                chamHoi: new character('?')
            }
            for (const item in initKey) {
                initKey[item].node.addEventListener('click', () => {
                    this.buffer.addToBuffer(initKey[item].value)
                })
            }
            return initKey;
    }
    
    displayKeyboard(_value = "normal") {
        this.status = _value;
        if (this.status = "normal") {
            let line1 = document.createElement('p');
            line1.appendChild(this.dataKeyboard.q.node);
            line1.append(this.dataKeyboard.w.node);
            line1.append(this.dataKeyboard.e.node);
            line1.append(this.dataKeyboard.r.node);
            line1.append(this.dataKeyboard.t.node);
            line1.append(this.dataKeyboard.y.node);
            line1.append(this.dataKeyboard.u.node);
            line1.append(this.dataKeyboard.i.node);
            line1.append(this.dataKeyboard.o.node);
            line1.append(this.dataKeyboard.p.node);

            let line2 = document.createElement('p');
            line2.append(this.dataKeyboard.a.node);
            line2.append(this.dataKeyboard.s.node);
            line2.append(this.dataKeyboard.d.node);
            line2.append(this.dataKeyboard.f.node);
            line2.append(this.dataKeyboard.g.node);
            line2.append(this.dataKeyboard.h.node);
            line2.append(this.dataKeyboard.j.node);
            line2.append(this.dataKeyboard.k.node);
            line2.append(this.dataKeyboard.l.node);

            let line3 = document.createElement('p');
            line3.append(this.dataKeyboard.capslock.node)
            line3.append(this.dataKeyboard.z.node);
            line3.append(this.dataKeyboard.x.node);
            line3.append(this.dataKeyboard.c.node);
            line3.append(this.dataKeyboard.v.node);
            line3.append(this.dataKeyboard.b.node);
            line3.append(this.dataKeyboard.n.node);
            line3.append(this.dataKeyboard.m.node);
            line3.append(this.dataKeyboard.delete.node);

            let line4 = document.createElement('p');
            line4.append(this.dataKeyboard.switchCharacter.node)
            line4.append(this.dataKeyboard.comma.node)
            line4.append(this.dataKeyboard.space.node)
            line4.append(this.dataKeyboard.dot.node)
            line4.append(this.dataKeyboard.enter.node)

            this.display.append(line1)
            this.display.append(line2)
            this.display.append(line3)
            this.display.append(line4)
        }
            return this.display;

    }
}
