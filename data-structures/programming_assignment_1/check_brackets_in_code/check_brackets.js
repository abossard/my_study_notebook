const { createInterface } = require("readline");

process.stdin.setEncoding('utf8');

var readlineInterface = createInterface({
    input: process.stdin,
    terminal: false
});

const pairs = [
    ['(', ')'],
    ['{', '}'],
    ['[', ']']
]

const areMatching = (left, right) => {
    return pairs.filter(pair => left === pair[0] && right === pair[1]).length === 1
}

let bracketStack = []

const findMismtach = text => {
    for (var i = 0; i < text.length; i++) {
        const char = text.charAt(i);
        if (pairs.filter(pair => pair[0] === char).length > 0) {
            bracketStack.push({ bracket: char, position: i })
        }
        if (pairs.filter(pair => pair[1] === char).length > 0) {
            const left = bracketStack.pop()
            if (!areMatching(left.bracket, char)) {
                return i + 1
            }
        }
    }

    if (bracketStack.length === 0) {
        return "Success"
    } else {
        return bracketStack.pop().position
    }
}

const mainFromStdinput = () => {
    let lines = [];

    readlineInterface.on('line', line => {
        lines.push(line);
    });

    readlineInterface.on('close', () => {
        console.log(findMismtach(lines.join()));
        process.exit();
    })
}
mainFromStdinput()

const mainTest = () => {
    console.log(findMismtach(':[{u{X38{{AHI(([n[[YM({J{(F{Mf(([L[68(L{oH[.[{d[[{jT[aqOvR{({8Mf[AjC{([{qB{[b(X[[H{(u[[{{A(({{C(fE(la(wh(:.Q:{{G(qP{{:S(!9((KGQ(M[z3[{7[K{(Gm6{kh[Tf[{h((x[[tv[t[I(xT((U(.[({]iS((((q(x[[lJ((l(6[R{([xQ(DS{(jm{[(Rf[lT(z{w{P[j[Q{u[.{E{QX{{5(e{4{[[[{PV[{{(bSt[O{(?:{{(E{X(jy{[AI{;{j[{(fwJ(i.{RP[{{{Y[{[R{(yt{[K}([rKw[zA(zs{M(q[Z(((X{D([(F[W{bQF[[mbO[0r(JG{(C(2q{D[W(j(ev(S26{E{([fM(Mh?{I[H{l6G3?[((6bS{([b((gA[F(5g(t[1[zO[H[nS(q(([ai[7[{2(n{34S[{i[uv[K{e(Hi(BM[{h[S(T({vl{R[{Xo{y3Q[i{[{t(([S{[[Tx[k[tnm{W({L7N{jD((LH[x[o{k{21{{O{,{pV[b{1[0[xt((N{{(G3[ONe{[R7G{6S[NM(a{{U.7fo{({,[W[((,G[{?{YwJ:({[w[(Ql[2[s(w:[0(bjW{c(5(O({q,r[[(Q2p(ZAB[O(6j{.(1.U(4R(u[([(I![M9[R6[{?on[Q(Jj[4((qq{X{[:[E[[[(.Cu{[J[(c(((AL{3P[N[}[gmg{?.({{v[1w7d(([c{{(Q([(k[{d(;[(eo{t(8([:[b[t[6[{oN{(N{D(GO{(4y[Fw{6[{[v(w(5((F{{[xwQN8(Q[{((([j(9B{[{({d6(7{(TR2U[L{mC(p{{u[;I{((B[:[:[d[[[{{Ine[c(Fw((,1[[[{!piD0{{(Y(4I{{{{[([t[U{(0[[RJt{2{Q[[8SG({{QM[le[HA[a{yV.(K({f:B[{F4p(7{{[(([[wR{T(RD(R{I(o{9(w{PI[([(FVw{{{((RBw({m{[0L{(r[(GT{d(Z(l{DV}51,)J)9}qO)]X)A}]}v}O)Ufs)ej)}QS}O}D)7]s)g]R}gs)v}p):f}4)nA)}]Wf]Pa))5t6]}}fV2)C7}0]}sx))}]Z]]5}jf};)]]Y;}8IUB}4]]v.)}1]L]D)x]}}TU}})A)}z}8}]]])c)xJ)]Ih}g}g]9]]0]L]]))q}]k}A}rBX)1}]Y2)y}?)xzK}OK:)}sN]X64})h]ps8I)4)4!)k}y]I)u]w9}LE}So)PP)O)]q}x]}])I})}sj)SQ}7}4.]]F]]y]);r)8}4)i])y}9m]BS)u]))}V}B]))]a}}g)}]]!]k})p)q)m)I]l]XQ})]b]N]8]h]!}.}d3m),)])qid]}]]]z)X])O7fO]))uHbY)N})DX]c))]Aa]4O}Lw)g)5A)n}VM)VZw])gMx!],])25]A]})A}X}Y]S)b)];]zD}2)}Q9}Lw}S);]}5P]H}we]1R)13j}1}E))y]Rd]j}.]H}B}J}j}x}mh}Y]]v)h)Qot}HV}b)}A]]:]]3?}5?]D)m)g}U]}dpp],}EUa}F]u}v}))6]h}U])HZ)y},!]]}]u})I}]T7]owy]))62)9]]]X]))]C)x8)4])q}N))]v}V]})]z7)Wv}}K0)n))Bl]N}J)6d)?}m)]f]?]}2]V)L0])Q,0}C)))qH]oJ)PO})]z.],U)P]U}m)v}Xv]T}]Y}j}}vpZV]c})IY)t7I}]}c}g]});})gCafz}};8)}QY]eE)}f}u]ks}:M];Fx]d]B2}v})}}XY}4}]CSx}]V]K1}}:)])]V}k)zY})]O)uY}QO]1N)K09)Z)]]y4)))))ZfD}mq)H]S)J)))D]l]0]SR]g9tX)Y)d}u]]8}h)Qn3}]}4T]oz]FL))o))v?}r}w)}})r))2)W}}M)d)}djf}C]]d)}rV]]ug)]n}b:zP}]Af)}0]w}Y)}0]14}]r]}]]aly})]]X)y)})M}X}C)3]72]AP])e)v}}Q}K}?]LlN'))
    process.exit()
}

//mainTest()