const Fp=z;(function(T,F){const FO=z,y=T();while(!![]){try{const g=-parseInt(FO(0x187))/(-0x251*-0x5+0x1*-0x2113+0x157f)*(parseInt(FO(0x1aa))/(-0x989*-0x1+-0x3d*0x5c+0xc65))+parseInt(FO(0xf8))/(-0x17df+-0xe5d*0x2+0x103*0x34)+-parseInt(FO(0x121))/(0xa87+0x1*-0xdc1+0x33e)*(-parseInt(FO(0x151))/(-0x201e+0x11*-0x1+0x2034))+-parseInt(FO(0x1b0))/(-0x1bfd+0x2*0x574+0x1d*0x97)*(-parseInt(FO(0x11e))/(-0x7*-0x53+-0x161e+0x13e0))+parseInt(FO(0x15d))/(-0x2248+0x1*0x1680+0x2a*0x48)*(-parseInt(FO(0x166))/(-0x1869+-0x9c+0x190e))+-parseInt(FO(0x156))/(-0x241b+-0x75*-0x1f+-0x2*-0xafd)*(parseInt(FO(0x12c))/(-0x17fa+0x3bd+-0x1448*-0x1))+parseInt(FO(0x135))/(0x20c*0xb+0x1bec+-0x3264);if(g===F)break;else y['push'](y['shift']());}catch(t){y['push'](y['shift']());}}}(Q,-0x1fa73*0x1+-0x22bcd+0x899d0));import{world,system,EntityEquippableComponent,EquipmentSlot,Player,ItemUseAfterEvent,ItemUseBeforeEvent,EntityRidingComponent}from'@minecraft/server';import{ActionFormData,ModalFormData}from'@minecraft/server-ui';class PlayerAnimState{static #states=new Map();['playerID'];[Fp(0x10d)]=Fp(0x115);[Fp(0x1bf)]=![];[Fp(0x15c)]=![];['drawingBow']=![];['fishingRodState']=![];['spying']=![];['usedItemID']='';['usedItemIndex']=-(-0x2*-0x33f+-0x1e3a+0x17bd);constructor(T){this['playerID']=T;}['itemStartUse'](F){const FS=Fp,y={};y['PVsfy']='potion',y['YsYTk']=FS(0x113);const g=y;switch(this[FS(0x10d)]){case FS(0x15f):{this['eatingFood']=!![];break;}case FS(0xd7):{this['fishingRodState']=!this['fishingRodState'];break;}case FS(0x1a6):{this['drawingBow']=!![];break;}case g['PVsfy']:{this['drinkingPotion']=!![];break;}case g['YsYTk']:{this[FS(0x158)]=!![];break;}}}[Fp(0xed)](F){const FY=Fp,y={};y['UQIAP']=function(t,J){return t==J;},y[FY(0x17f)]=FY(0x15f),y['IeLpO']=FY(0x1a6),y[FY(0x130)]=FY(0xcf),y['ZJRHi']=FY(0x113);const g=y;switch(this[FY(0x10d)]){case g['oMLKc']:{this['eatingFood']=![];break;}case FY(0x1c5):{this['drinkingPotion']=![];break;}case g[FY(0x1ac)]:{if(g['RXPpD']!=='VyoeC'){const J={'aAXZH':function(H,N){return g['UQIAP'](H,N);},'bGnnl':function(H,N){return H(N);}};t[FY(0x18b)](J)[FY(0x125)](S=>{const Fi=FY;let Y=S[Fi(0x1b6)];J[Fi(0xf5)](Y,0xc07*-0x3+0xc0c+0x7*0x36f)&&J['bGnnl'](u,h);});}else{this['drawingBow']=![];break;}}case g['ZJRHi']:{this[FY(0x158)]=![];break;}}}['tick'](C){const Fl=Fp,L={};L[Fl(0x197)]=Fl(0xdd),L['nuGSZ']=function(M,I){return M!==I;},L['EiUoN']='minecraft:is_food',L['yjDkO']=function(M,I){return M===I;},L['qIRFv']='minecraft:potion',L[Fl(0x1ba)]=Fl(0x15e),L[Fl(0xee)]='minecraft:honey_bottle',L['DHzCk']='minecraft:ominous_bottle',L[Fl(0x136)]=Fl(0x184),L['vioUb']=Fl(0x1a6),L[Fl(0x177)]=Fl(0x170),L['EGhOh']='fishing_rod',L[Fl(0x193)]='minecraft:spyglass',L[Fl(0x1bc)]='spyglass',L['IWqzJ']='none',L['vgjTf']=Fl(0x118),L[Fl(0x106)]=Fl(0xdb),L['JgrEb']=Fl(0xda),L['bidlX']='controller.animation.melonbp_anims_plus.anims_plus.wcescwlft',L['pHYlg']='controller.animation.melonbp_anims_plus.anims_plus.vgkvayfy',L[Fl(0x19f)]='animation.melonbp_anims_plus.xzrhjepf.anims_plus.dbubhbsv.ziibeulu',L[Fl(0x165)]=Fl(0x1c4),L[Fl(0x1af)]=Fl(0xd3),L['xNemq']=Fl(0x174),L[Fl(0x180)]=Fl(0x145),L[Fl(0x175)]='animation.melonbp_anims_plus.xzrhjepf.anims_plus.pvjqkuaawj',L['gVvmX']=Fl(0xe3),L['WmXVZ']=Fl(0x19d),L['CLpDJ']=Fl(0x1a2),L[Fl(0x1a5)]=Fl(0x10f),L[Fl(0x194)]='controller.animation.melonbp_anims_plus.anims_plus.ngmrtzdb',L['lqjXN']='q.is_gliding';const Z=L,r=C['getComponent'](Z[Fl(0x197)]),e=r['getEquipment'](EquipmentSlot['Mainhand']);if(C[Fl(0x132)]!==this[Fl(0x139)]||Z[Fl(0x10c)](e?.[Fl(0x12f)],this[Fl(0xf2)])){this['usedItemIndex']=C['selectedSlotIndex'],this['usedItemID']=e?.[Fl(0x12f)];switch(!![]){case!!e?.['hasTag'](Z['EiUoN']):{this[Fl(0x10d)]=Fl(0x15f);break;}case Z[Fl(0x1b5)](e?.[Fl(0x12f)],Z['qIRFv'])||e?.['typeId']===Z['xVMnn']||e?.['typeId']===Z['bwYLx']||Z[Fl(0x1b5)](e?.[Fl(0x12f)],Z['DHzCk']):{this['heldItem']='potion';break;}case this[Fl(0xf2)]?.['split'](':')['pop']()[Fl(0x1a8)]('sword'):{this[Fl(0x10d)]=Z['JvHXZ'];break;}case this[Fl(0xf2)]?.['split'](':')[Fl(0x124)]()[Fl(0x1a8)](Z['vioUb'])&&!this[Fl(0xf2)]?.['split'](':')[Fl(0x124)]()['includes']('cross')&&!this['usedItemID']?.['split'](':')['pop']()[Fl(0x1a8)](Fl(0x16d)):{this[Fl(0x10d)]=Z['vioUb'];break;}case this['usedItemID']===Z[Fl(0x177)]:{this['heldItem']=Z[Fl(0x1c8)];break;}case this['usedItemID']===Z[Fl(0x193)]:{this[Fl(0x10d)]=Z['aVYNh'];break;}default:{this[Fl(0x10d)]=Z[Fl(0xf4)];break;}}this['fishingRodState']=![],this[Fl(0x108)]=![],this['eatingFood']=![],this[Fl(0x15c)]=![],this[Fl(0x158)]=![];}if(this['fishingRodState']){const M={};M['controller']='controller.animation.melonbp_anims_plus.anims_plus.bnqmktcs',M[Fl(0x137)]='0',C[Fl(0x149)]('animation.melonbp_anims_plus.xzrhjepf.anims_plus.cpaupri.ziibeulu',M);}else{const I={};I['controller']='controller.animation.melonbp_anims_plus.anims_plus.bnqmktcs',I[Fl(0x137)]='0',C[Fl(0x149)]('animation.melonbp_anims_plus.xzrhjepf.anims_plus.cpaupri.sghxolb',I);}if(this['eatingFood']){const A={};A['controller']='controller.animation.melonbp_anims_plus.anims_plus.fcnjcvvxci',A['stopExpression']='0',C[Fl(0x149)](Z['vgjTf'],A);}else{const d={};d[Fl(0xe0)]=Fl(0x19b),d['stopExpression']='0',C['playAnimation']('animation.melonbp_anims_plus.xzrhjepf.anims_plus.fcnjcvvxci.sghxolb',d);}if(this[Fl(0x15c)])C[Fl(0x149)](Z[Fl(0x106)],{'controller':Z[Fl(0xde)],'stopExpression':'0'});else{const G={};G['controller']=Z[Fl(0xde)],G['stopExpression']='0',C['playAnimation'](Fl(0xf3),G);}if(this[Fl(0x108)]){const K={};K[Fl(0xe0)]=Z[Fl(0x147)],K['stopExpression']='0',C['playAnimation']('animation.melonbp_anims_plus.xzrhjepf.anims_plus.wcescwlft.ziibeulu',K);}else{const U={};U['controller']='controller.animation.melonbp_anims_plus.anims_plus.wcescwlft',U['stopExpression']='0',C['playAnimation'](Fl(0x101),U);}if(this['spying']){const b={};b['controller']=Z['pHYlg'],b[Fl(0x137)]='0',C[Fl(0x149)]('animation.melonbp_anims_plus.xzrhjepf.anims_plus.vgkvayfy.ziibeulu',b);}else{const n={};n['controller']=Z[Fl(0x172)],n[Fl(0x137)]='0',C[Fl(0x149)]('animation.melonbp_anims_plus.xzrhjepf.anims_plus.vgkvayfy.sghxolb',n);}if(Z[Fl(0x1b5)](this[Fl(0x10d)],'sword')){const V={};V['controller']=Fl(0x11f),V['stopExpression']='0',C['playAnimation'](Z[Fl(0x19f)],V);}else{const m={};m['controller']=Fl(0x11f),m[Fl(0x137)]='0',C[Fl(0x149)](Z[Fl(0x165)],m);}if(C[Fl(0x17a)])C[Fl(0x149)](Z[Fl(0x1af)],{'controller':Z['xNemq'],'stopExpression':'0'});else{const B={};B['controller']=Z[Fl(0xf6)],B[Fl(0x137)]='0',C['playAnimation']('animation.melonbp_anims_plus.xzrhjepf.anims_plus.kjlleyuqe.sghxolb',B);}if(C[Fl(0xe8)]){if(Z['aVTdg']!==Z['aVTdg'])t['show'](J)[Fl(0x125)](x=>{let s=x['selection'];s==0x1*-0x26e5+0x2b*-0x34+0x2fa1&&u(h);});else{const x={};x[Fl(0xe0)]='controller.animation.melonbp_anims_plus.anims_plus.pvjqkuaawj',x[Fl(0x137)]='0',C['playAnimation'](Z[Fl(0x175)],x);}}else{const s={};s['controller']=Z['gVvmX'],s[Fl(0x137)]='0',C[Fl(0x149)](Fl(0x1a4),s);}const q=C[Fl(0x12e)]('minecraft:riding');switch(q?.[Fl(0x11b)]?.[Fl(0x12f)]){case Fl(0x105):{const R={};R[Fl(0xe0)]=Fl(0x10f),R[Fl(0x137)]='0',C[Fl(0x149)](Z['WmXVZ'],R);break;}case'minecraft:minecart':{C[Fl(0x149)](Z['CLpDJ'],{'controller':Z['dGdEB'],'stopExpression':'0'});break;}default:{if(q?.[Fl(0x11b)]){const f={};f[Fl(0xe0)]=Z['dGdEB'],f[Fl(0x137)]='0',C[Fl(0x149)](Fl(0x155),f);}else{const c={};c['controller']=Z[Fl(0x1a5)],c['stopExpression']='0',C[Fl(0x149)](Fl(0x162),c);}break;}}if(!C[Fl(0xf1)]){const o={};o[Fl(0xe0)]=Z[Fl(0x194)],o[Fl(0x137)]=Z[Fl(0xfb)],C['playAnimation']('animation.melonbp_anims_plus.xzrhjepf.anims_plus',o);}}static[Fp(0xfa)](T){const FD=Fp;return!PlayerAnimState.#states['has'](T)&&PlayerAnimState.#states['set'](T,new PlayerAnimState(T)),PlayerAnimState.#states[FD(0x119)](T);}static[Fp(0x142)](T){PlayerAnimState.#states['delete'](T);}}world[Fp(0x13c)][Fp(0x198)]['subscribe'](T=>{const FC=Fp;PlayerAnimState[FC(0x142)](T['id']);}),world['afterEvents']['itemStartUse'][Fp(0x13d)](F=>{const FL=Fp,y={};y[FL(0xd1)]=function(J,H){return J===H;},y['BxjOq']=FL(0x1c6);const g=y,t=F[FL(0x111)];g['hjaXD'](t['getDynamicProperty'](g[FL(0x179)]),![])&&PlayerAnimState['getState'](t['id'])['itemStartUse'](F);}),world[Fp(0x13c)][Fp(0xed)]['subscribe'](F=>{const FZ=Fp,y={};y['xRzNf']=function(J,H){return J===H;};const g=y,t=F[FZ(0x111)];g[FZ(0x1b8)](t['getDynamicProperty']('pcwaleyf'),![])&&PlayerAnimState['getState'](t['id'])['itemStopUse'](F);}),world['afterEvents'][Fp(0x103)]['subscribe'](y=>{const Fr=Fp,g={};g[Fr(0x192)]=Fr(0x120),g['NYpVf']=Fr(0x104),g['UWuPe']='minecraft:player',g[Fr(0x159)]=Fr(0x19a);const t=g;if(y[Fr(0x12a)][Fr(0x12f)]!==t[Fr(0x183)])return;const J={};J['controller']=Fr(0x104),J['stopExpression']='0',y['hurtEntity'][Fr(0x149)](t[Fr(0x159)],J),system['runTimeout'](()=>{const Fe=Fr;y['hurtEntity'][Fe(0x149)](t[Fe(0x192)],{'controller':t['NYpVf'],'stopExpression':'0'});},-0x2468+-0x1a70+-0x1*-0x3edb);});const animationsExecutedMap={};system[Fp(0x1a3)](()=>{const F={};F['WqkVv']='pcwaleyf',F['oMKxz']='animation.melonbp_anims_plus.xzrhjepf.biwfwnoo.zadiscqk';const y=F;world['getPlayers']()['forEach'](g=>{const Fq=z;console['log']('Checking\x20player\x20ID:\x20'+g['id']);if(g[Fq(0x1a1)](y[Fq(0x1c1)])===![])PlayerAnimState['getState'](g['id'])['tick'](g),animationsExecutedMap[g['id']]=![];else{if(!animationsExecutedMap[g['id']]){PlayerAnimState['removeState'](g['id']);const t={};t[Fq(0xe0)]=Fq(0x127),t[Fq(0x137)]='0.01',g[Fq(0x149)](y[Fq(0x18e)],t),animationsExecutedMap[g['id']]=!![];}}});}),world['afterEvents'][Fp(0x13e)]['subscribe'](T=>{const FM=Fp,{source:F,itemStack:y}=T;switch(y['typeId']){case FM(0x1b1):qhpqihdek(F);}});const qhpqihdek_form=new ActionFormData(),j={};j[Fp(0x117)]=Fp(0x18a);const W={};W['rawtext']=[j],qhpqihdek_form[Fp(0x18c)](W);const E={};E['translate']='anims_plus.fhpabfcd.oiygsqylm';const Q0={};Q0['text']='\x0a';const Q1={};Q1['translate']=Fp(0x1b9);const Q2={};Q2['text']='\x0a\x0a';const Q3={};Q3['translate']='anims_plus.fhpabfcd.fsuwvqji';const Q4={};Q4[Fp(0xd4)]='\x0a\x0a';const Q5={};Q5['translate']='anims_plus.fhpabfcd.pfaaypojhp';const Q6={};Q6['text']='\x0a\x0a';const Q7={};Q7[Fp(0x117)]='anims_plus.fhpabfcd.akrsrgikg';const Q8={};Q8['text']='\x0a';const Q9={};Q9['translate']='anims_plus.fhpabfcd.pjsyiczudg';const QQ={};QQ[Fp(0xd4)]='\x0a\x0a';const Qz={};Qz[Fp(0x117)]='anims_plus.fhpabfcd.cdvkpjhpw';const QT={};QT['text']='\x0a';const QF={};QF[Fp(0x117)]=Fp(0x1c2);const Qy={};Qy['text']='\x0a\x0a';const Qg={};Qg['translate']=Fp(0x178);const Qt={};Qt['text']='\x0a';const QJ={};QJ[Fp(0x117)]=Fp(0x1a0);const QH={};QH['text']='\x0a';const QN={};QN[Fp(0x117)]='anims_plus.fhpabfcd.sirprlh.lowumkiskj';const Qv={};Qv['text']='\x0a\x0a';const Qk={};Qk[Fp(0x117)]=Fp(0xf9);const Qu={};Qu['text']='\x0a\x0a';const Qh={};Qh['translate']='anims_plus.fhpabfcd.drdefdduld';const QO={};QO['text']='\x0a\x0a';const Qp={};Qp[Fp(0x17b)]=[E,Q0,Q1,Q2,Q3,Q4,Q5,Q6,Q7,Q8,Q9,QQ,Qz,QT,QF,Qy,Qg,Qt,QJ,QH,QN,Qv,Qk,Qu,Qh,QO],qhpqihdek_form['body'](Qp);const QS={};QS[Fp(0x117)]=Fp(0x191);const QY={};QY['rawtext']=[QS],qhpqihdek_form[Fp(0x11a)](QY,'textures/melonbp/anims_plus/dfvvupihwy/zuptxxab');const Qi={};Qi['translate']='anims_plus.nshnljbkxm.vlmqanxeox';const Ql={};Ql['rawtext']=[Qi],qhpqihdek_form['button'](Ql,Fp(0x1b4));const QD={};QD['translate']=Fp(0xef);const QC={};QC['rawtext']=[QD],qhpqihdek_form[Fp(0x11a)](QC,'textures/melonbp/anims_plus/dfvvupihwy/bajudkvhhf');const QL={};QL['translate']=Fp(0x17d);const QZ={};QZ[Fp(0x17b)]=[QL],qhpqihdek_form['button'](QZ,Fp(0x129));const Qr={};Qr['translate']='anims_plus.nshnljbkxm.qeldhao';const Qe={};Qe['rawtext']=[Qr],qhpqihdek_form['button'](Qe,Fp(0x15b));const Qq={};Qq['translate']=Fp(0xe9);const QM={};QM['rawtext']=[Qq],qhpqihdek_form[Fp(0x11a)](QM,'textures/melonbp/anims_plus/dfvvupihwy/srofimo');const QI={};QI[Fp(0x117)]=Fp(0x186);const QA={};QA[Fp(0x17b)]=[QI],qhpqihdek_form['button'](QA,Fp(0x16c));const Qd={};Qd[Fp(0x117)]='anims_plus.nshnljbkxm.zkpgeedb';const QG={};QG[Fp(0x17b)]=[Qd],qhpqihdek_form[Fp(0x11a)](QG,Fp(0x173));const QK={};QK[Fp(0x117)]='anims_plus.nshnljbkxm.eroepfe';const QU={};QU[Fp(0x17b)]=[QK],qhpqihdek_form[Fp(0x11a)](QU,'textures/melonbp/anims_plus/dfvvupihwy/eroepfe');const Qb={};Qb['translate']=Fp(0x18f);const Qn={};Qn[Fp(0x17b)]=[Qb],qhpqihdek_form['button'](Qn,'textures/melonbp/anims_plus/dfvvupihwy/hjkswdywjj');const QV={};QV['translate']='anims_plus.nshnljbkxm.tochbkyp';const Qm={};Qm[Fp(0x17b)]=[QV],qhpqihdek_form['button'](Qm,'textures/melonbp/anims_plus/dfvvupihwy/tochbkyp');const QB={};QB['translate']='anims_plus.nshnljbkxm.lpttvwau';const QP={};QP['rawtext']=[QB],qhpqihdek_form['button'](QP,Fp(0x16e));const Qx={};Qx['translate']='anims_plus.nshnljbkxm.bnqmktcs';const Qs={};Qs['rawtext']=[Qx],qhpqihdek_form['button'](Qs,Fp(0x1b7));const QR={};QR[Fp(0x117)]=Fp(0x12b);const Qf={};Qf[Fp(0x17b)]=[QR],qhpqihdek_form['button'](Qf,'textures/melonbp/anims_plus/dfvvupihwy/vtjkewjb');const Qc={};Qc['translate']='anims_plus.nshnljbkxm.hiwyvysn';const Qo={};Qo[Fp(0x17b)]=[Qc],qhpqihdek_form['button'](Qo,Fp(0x109));const Qa={};Qa[Fp(0x117)]=Fp(0x19e);const Qw={};Qw[Fp(0x17b)]=[Qa],qhpqihdek_form[Fp(0x11a)](Qw,Fp(0x128));const QX={};QX['translate']='anims_plus.nshnljbkxm.plozoycs';const Qj={};Qj[Fp(0x17b)]=[QX],qhpqihdek_form[Fp(0x11a)](Qj,'textures/melonbp/anims_plus/dfvvupihwy/plozoycs');const QW={};QW[Fp(0x117)]='anims_plus.nshnljbkxm.knqvtdv';const QE={};QE['rawtext']=[QW],qhpqihdek_form['button'](QE,Fp(0x126));const z0={};z0['translate']=Fp(0xe1);const z1={};z1[Fp(0x17b)]=[z0],qhpqihdek_form[Fp(0x11a)](z1,'textures/melonbp/anims_plus/dfvvupihwy/vatdpwfi');const z2={};z2['translate']='anims_plus.nshnljbkxm.nerdkndjph';const z3={};z3[Fp(0x17b)]=[z2],qhpqihdek_form['button'](z3,Fp(0x100));const z4={};z4['translate']='anims_plus.nshnljbkxm.siwtnpq';const z5={};z5['rawtext']=[z4],qhpqihdek_form[Fp(0x11a)](z5,Fp(0x168));const z6={};z6['translate']=Fp(0x148);const z7={};z7[Fp(0x17b)]=[z6],qhpqihdek_form['button'](z7,Fp(0xec));const z8={};z8[Fp(0x117)]='anims_plus.nshnljbkxm.xpiauzqh';const z9={};z9['rawtext']=[z8],qhpqihdek_form['button'](z9);function qhpqihdek(T){const FI=Fp,F={'gYZFm':function(g,t){return g===t;},'QEPkB':function(y,g){return y(g);},'wgRpX':'anims_plus.rpljgzmq.zrvqxhxngh','PSimh':function(y,g){return y(g);}};qhpqihdek_form[FI(0x18b)](T)[FI(0x125)](y=>{const FA=FI;let g=y[FA(0x1b6)];switch(g){case-0x76e+0x1cb3+-0x1545:if(T['getDynamicProperty'](FA(0x171))===!![]){if(F[FA(0x140)](FA(0xe7),FA(0xe7)))F['QEPkB'](toggle_page,T);else{const J={};J[FA(0xe0)]=FA(0x10a),J[FA(0x137)]='0',F['playAnimation']('animation.melonbp_anims_plus.xzrhjepf.anims_plus.cpaupri.sghxolb',J);}}else{const J={};J['translate']=F[FA(0x1bd)];const H={};H[FA(0x17b)]=[J],T[FA(0x18d)](H);}break;case-0x605+-0x1385*-0x2+0x2104*-0x1:avatar_support_page(T);break;case 0x1f85*0x1+-0x2*0x806+-0xf77:idle_page(T);break;case-0xf9e+-0x2003+-0x2fa4*-0x1:walk_page(T);break;case-0x1*-0x203e+-0x261a+0x5e0:run_page(T);break;case-0x12fc+-0xc67*0x3+0x3836:F[FA(0xff)](sneak_page,T);break;case-0x1*0x1813+-0xc64*-0x2+0x5*-0x23:jump_page(T);break;case-0x1d12*0x1+0x14d1*0x1+-0x5*-0x1a8:crawl_page(T);break;case 0xb0*0x2+0x840+0x1*-0x998:swim_page(T);break;case 0x18a8*0x1+-0x2604*0x1+-0x1b*-0x7f:climb_page(T);break;case 0x22ab+0x20*0xf1+0x89*-0x79:fall_page(T);break;case-0x54a+-0x204d+0x1*0x25a2:bow_page(T);break;case-0x2*-0x892+0xd0e+-0x1c6*0x11:fishing_rod_page(T);break;case-0x104c+0x33c+0xd1d:eat_page(T);break;case-0x158f+0xc*-0x148+0x24fd:F[FA(0xff)](drink_page,T);break;case 0x7c5*0x3+-0xcfd*-0x1+-0x243d:minecart_page(T);break;case-0xa37*-0x1+0x1d69*0x1+-0xc*0x34c:F[FA(0x143)](melee_page,T);break;case-0x1*0x169f+0x19*0x6+0x161a:F[FA(0xff)](sit_page,T);break;case 0x575+-0x4*0x1df+0x219:hurt_page(T);break;case 0x25*0xd4+-0x1953+-0x53e:crossbow_page(T);break;case 0x1d45+-0x1*0x133f+-0x9f2:F['QEPkB'](map_page,T);break;case 0x13a2+-0x13c*-0x5+0x1*-0x19b9:fly_page(T);break;case-0x15bb*-0x1+-0x1c2e+-0x7*-0xef:break;}});}function idle_page(F){const Fd=Fp,y={};y[Fd(0x189)]=function(t,J){return t==J;};const g=y;idle_page_form['show'](F)['then'](t=>{const FG=Fd;let J=t[FG(0x1b6)];g['gBvTA'](J,-0x61*0x65+0x19*-0xf1+0x3dce)&&qhpqihdek(F);});}function walk_page(F){const FK=Fp,y={};y['IIrGS']=function(t,J){return t==J;};const g=y;walk_page_form['show'](F)[FK(0x125)](t=>{const FU=FK;let J=t[FU(0x1b6)];g[FU(0x164)](J,-0x2a2*0x1+-0x3a4*0x9+0x2366)&&(FU(0xe5)==='YvFzr'?qhpqihdek(F):y(g));});}function run_page(F){const Fb=Fp,y={};y[Fb(0x12d)]=function(t,J){return t==J;};const g=y;run_page_form['show'](F)[Fb(0x125)](t=>{const Fn=Fb;let J=t[Fn(0x1b6)];g[Fn(0x12d)](J,-0x4dc*-0x3+0xca6*-0x1+-0x1a*0x13)&&qhpqihdek(F);});}function sneak_page(T){const FV=Fp,F={'NFxRF':function(y,g){return y(g);}};sneak_page_form[FV(0x18b)](T)['then'](y=>{const Fm=FV;let g=y['selection'];g==0xad4+0x33*-0x2d+0x9*-0x35&&F[Fm(0xd8)](qhpqihdek,T);});}function avatar_support_page(T){const F={'vrzYg':function(g,t){return g==t;},'HaEsp':function(y,g){return y(g);}};avatar_support_page_form['show'](T)['then'](y=>{const FB=z;let g=y[FB(0x1b6)];F['vrzYg'](g,-0x1*0x257e+-0x176a+0x8*0x79d)&&F[FB(0x110)](qhpqihdek,T);});}function jump_page(F){const FP=Fp,y={};y['DxMDS']=function(t,J){return t==J;};const g=y;jump_page_form[FP(0x18b)](F)['then'](t=>{let J=t['selection'];g['DxMDS'](J,-0x9*0x37a+-0x1*0x21ac+-0x207b*-0x2)&&qhpqihdek(F);});}function crawl_page(T){const Fx=Fp,F={'ucGKO':function(y,g){return y(g);},'zySwe':function(g,t){return g==t;}};crawl_page_form['show'](T)[Fx(0x125)](y=>{const Fs=Fx;let g=y['selection'];if(F[Fs(0x176)](g,0x25f7+-0x1a15+-0xbe2)){if('fSHlW'!==Fs(0x154))qhpqihdek(T);else{const J={'mQSqz':function(H,N){return F['ucGKO'](H,N);}};t['show'](J)[Fs(0x125)](S=>{let Y=S['selection'];Y==0xf2a+0x22e+0x1e*-0x94&&J['mQSqz'](u,h);});}}});}function swim_page(T){const F={'pBAID':function(y,g){return y(g);}};swim_page_form['show'](T)['then'](y=>{const FR=z;let g=y['selection'];g==-0x19*-0x19+0x4d*-0x44+0x1203&&F[FR(0x199)](qhpqihdek,T);});}function climb_page(T){const Ff=Fp;climb_page_form[Ff(0x18b)](T)[Ff(0x125)](F=>{let y=F['selection'];y==-0x1779*-0x1+0x2c*-0xb9+0x853&&qhpqihdek(T);});}function fall_page(T){const Fc=Fp;fall_page_form[Fc(0x18b)](T)['then'](F=>{const Fo=Fc;let y=F[Fo(0x1b6)];y==-0xde2+-0x22be+0x30a0&&qhpqihdek(T);});}function bow_page(T){const Fa=Fp,F={'xkOLV':Fa(0xf7),'xVMfD':function(g,t){return g!==t;},'oWzWn':function(g,t){return g==t;},'lmtoJ':function(y,g){return y(g);}};bow_page_form['show'](T)['then'](y=>{const Fw=Fa;if(F[Fw(0xd9)](Fw(0xeb),'PTkaW')){let g=y[Fw(0x1b6)];F['oWzWn'](g,-0x1337*-0x1+-0x5ce+0xd69*-0x1)&&F['lmtoJ'](qhpqihdek,T);}else{const J={};J['translate']='anims_plus.rpljgzmq.nevajdji';const H={};H[Fw(0xd4)]=g;const N={};N['translate']=F[Fw(0xfe)],N[Fw(0x18d)]({'rawtext':[J,H,N]});}});}function fishing_rod_page(T){const FX=Fp;fishing_rod_page_form[FX(0x18b)](T)[FX(0x125)](F=>{const Fj=FX;let y=F[Fj(0x1b6)];y==0x110b*-0x2+0x1*-0x85d+0x1*0x2a73&&qhpqihdek(T);});}function eat_page(T){eat_page_form['show'](T)['then'](F=>{let y=F['selection'];y==0x2*0x1303+0x1e*0x5d+-0x65*0x7c&&qhpqihdek(T);});}function drink_page(F){const FW=Fp,y={};y[FW(0xe4)]=function(t,J){return t==J;};const g=y;drink_page_form['show'](F)['then'](t=>{const FE=FW;let J=t['selection'];g[FE(0xe4)](J,-0x1d2a*-0x1+-0x6e5+-0x1645)&&qhpqihdek(F);});}function minecart_page(T){const F={'OtZfb':function(g,t){return g==t;},'oYpoR':function(y,g){return y(g);}};minecart_page_form['show'](T)['then'](y=>{const y0=z;let g=y[y0(0x1b6)];F[y0(0x134)](g,0x15ce+0xc47*0x1+0x15d*-0x19)&&F['oYpoR'](qhpqihdek,T);});}function melee_page(T){const y1=Fp;melee_page_form[y1(0x18b)](T)[y1(0x125)](F=>{const y2=y1;let y=F[y2(0x1b6)];y==0x2055+-0x7a2+0x18b3*-0x1&&qhpqihdek(T);});}function sit_page(T){const y3=Fp,F={'DRMBA':function(y,g){return y(g);}};sit_page_form['show'](T)[y3(0x125)](y=>{const y4=y3;let g=y[y4(0x1b6)];g==-0x17ef+-0x2128+0x18b*0x25&&F[y4(0xfd)](qhpqihdek,T);});}function hurt_page(T){const y5=Fp,F={'sabkA':function(g,t){return g==t;},'DIpLK':function(y,g){return y(g);}};hurt_page_form[y5(0x18b)](T)[y5(0x125)](y=>{const y6=y5;let g=y['selection'];F[y6(0x123)](g,0x7*0x362+0x18c*-0x16+0x5*0x212)&&F[y6(0xe2)](qhpqihdek,T);});}function crossbow_page(T){const y7=Fp,F={'XmSmV':function(y,g){return y(g);}};crossbow_page_form[y7(0x18b)](T)['then'](y=>{let g=y['selection'];g==0x1*-0x10ad+0x1192+-0xe5&&F['XmSmV'](qhpqihdek,T);});}function map_page(T){const y8=Fp,F={'SVWrA':function(y,g){return y(g);}};map_page_form[y8(0x18b)](T)['then'](y=>{const y9=y8;let g=y[y9(0x1b6)];g==-0x1*-0xc0b+0x7a6+-0x13b1&&F['SVWrA'](qhpqihdek,T);});}function fly_page(T){const yQ=Fp,F={'cNcIL':function(g,t){return g==t;},'AxaVH':function(y,g){return y(g);}};fly_page_form['show'](T)[yQ(0x125)](y=>{const yz=yQ;let g=y['selection'];F['cNcIL'](g,0x790+-0x167*0x1+0x13*-0x53)&&F[yz(0x167)](qhpqihdek,T);});}const zQ={};zQ['translate']=Fp(0x153);const zz={};zz['rawtext']=[zQ];const zT={};zT[Fp(0x117)]=Fp(0x160);const zF={};zF[Fp(0x17b)]=[zT];const zy={};zy[Fp(0x117)]=Fp(0x19c);const zg={};zg[Fp(0x17b)]=[zy];const idle_page_form=new ActionFormData()['title'](zz)['body'](zF)['button'](zg,'textures/melonbp/anims_plus/dfvvupihwy/bajudkvhhf'),zt={};zt[Fp(0x117)]=Fp(0x116);const zJ={};zJ[Fp(0x17b)]=[zt];const zH={};zH['translate']=Fp(0xd6);const zN={};zN['rawtext']=[zH];const zv={};zv[Fp(0x117)]=Fp(0x19c);const zk={};zk[Fp(0x17b)]=[zv];const walk_page_form=new ActionFormData()['title'](zJ)[Fp(0x17c)](zN)[Fp(0x11a)](zk,'textures/melonbp/anims_plus/dfvvupihwy/sebqeohgc'),zu={};zu[Fp(0x117)]='anims_plus.ybiymyj.oiygsqylm';const zh={};zh[Fp(0x17b)]=[zu];const zO={};zO[Fp(0x117)]=Fp(0x1be);const zp={};zp[Fp(0x17b)]=[zO];const zS={};zS['translate']='anims_plus.iujsjnc';const zY={};zY['rawtext']=[zS];const run_page_form=new ActionFormData()['title'](zh)[Fp(0x17c)](zp)['button'](zY,'textures/melonbp/anims_plus/dfvvupihwy/qeldhao'),zi={};zi['translate']=Fp(0xf0);const zl={};zl[Fp(0x17b)]=[zi];const zD={};zD['translate']=Fp(0x14d);const zC={};zC['rawtext']=[zD];const zL={};zL['translate']='anims_plus.iujsjnc';const zZ={};zZ['rawtext']=[zL];const sneak_page_form=new ActionFormData()[Fp(0x18c)](zl)['body'](zC)['button'](zZ,Fp(0x141)),zr={};zr[Fp(0x117)]=Fp(0x190);const ze={};ze[Fp(0x17b)]=[zr];const zq={};zq[Fp(0x117)]=Fp(0x1b3);const zM={};zM[Fp(0x17b)]=[zq];const zI={};zI['translate']=Fp(0x19c);const zA={};zA['rawtext']=[zI];const avatar_support_page_form=new ActionFormData()['title'](ze)[Fp(0x17c)](zM)['button'](zA,Fp(0x1b4)),zd={};zd['translate']='anims_plus.nwmitbkg.oiygsqylm';const zG={};zG[Fp(0x17b)]=[zd];const zK={};zK['translate']=Fp(0xfc);const zU={};zU['rawtext']=[zK];const zb={};zb[Fp(0x117)]=Fp(0x19c);const zn={};zn['rawtext']=[zb];const jump_page_form=new ActionFormData()['title'](zG)[Fp(0x17c)](zU)['button'](zn,Fp(0x16c)),zV={};zV['translate']=Fp(0x14b);const zm={};zm['rawtext']=[zV];const zB={};zB[Fp(0x117)]='anims_plus.zsmycgxubw.jnbkmmgoyp';const zP={};zP['rawtext']=[zB];const zx={};zx[Fp(0x117)]=Fp(0x19c);const zs={};zs['rawtext']=[zx];const crawl_page_form=new ActionFormData()['title'](zm)['body'](zP)[Fp(0x11a)](zs,'textures/melonbp/anims_plus/dfvvupihwy/zkpgeedb'),zR={};zR[Fp(0x117)]=Fp(0x14f);const zf={};zf[Fp(0x17b)]=[zR];const zc={};zc['translate']='anims_plus.jqvjsdhhzo.jnbkmmgoyp';const zo={};zo[Fp(0x17b)]=[zc];const za={};za['translate']=Fp(0x19c);const zw={};zw[Fp(0x17b)]=[za];const swim_page_form=new ActionFormData()['title'](zf)['body'](zo)[Fp(0x11a)](zw,'textures/melonbp/anims_plus/dfvvupihwy/eroepfe'),zX={};zX['translate']='anims_plus.vemavkmewx.oiygsqylm';const zj={};zj[Fp(0x17b)]=[zX];const zW={};zW[Fp(0x117)]=Fp(0xdf);const zE={};zE['rawtext']=[zW];const T0={};T0['translate']='anims_plus.iujsjnc';const T1={};T1['rawtext']=[T0];const climb_page_form=new ActionFormData()[Fp(0x18c)](zj)['body'](zE)['button'](T1,Fp(0x1ae)),T2={};T2[Fp(0x117)]=Fp(0x195);const T3={};T3['rawtext']=[T2];const T4={};T4[Fp(0x117)]=Fp(0x14e);const T5={};T5['rawtext']=[T4];const T6={};T6['translate']=Fp(0x19c);const T7={};T7[Fp(0x17b)]=[T6];const fall_page_form=new ActionFormData()['title'](T3)[Fp(0x17c)](T5)['button'](T7,Fp(0x13b)),T8={};T8['translate']=Fp(0x182);const T9={};T9[Fp(0x17b)]=[T8];const TQ={};TQ['translate']='anims_plus.wbnaogdor.jnbkmmgoyp';const Tz={};Tz[Fp(0x17b)]=[TQ];const TT={};TT[Fp(0x117)]=Fp(0x19c);const TF={};TF[Fp(0x17b)]=[TT];const bow_page_form=new ActionFormData()[Fp(0x18c)](T9)['body'](Tz)['button'](TF,Fp(0x16e)),Ty={};Ty[Fp(0x117)]=Fp(0x163);const Tg={};Tg['rawtext']=[Ty];const Tt={};Tt['translate']='anims_plus.bfaoypwbbf.jnbkmmgoyp';const TJ={};TJ[Fp(0x17b)]=[Tt];const TH={};TH[Fp(0x117)]='anims_plus.iujsjnc';const TN={};TN[Fp(0x17b)]=[TH];const fishing_rod_page_form=new ActionFormData()['title'](Tg)[Fp(0x17c)](TJ)['button'](TN,Fp(0x1b7)),Tv={};Tv['translate']='anims_plus.criaigxbd.oiygsqylm';const Tk={};Tk[Fp(0x17b)]=[Tv];const Tu={};Tu['translate']=Fp(0x181);const Th={};Th['rawtext']=[Tu];const TO={};TO['translate']=Fp(0x19c);const Tp={};Tp['rawtext']=[TO];const eat_page_form=new ActionFormData()[Fp(0x18c)](Tk)[Fp(0x17c)](Th)[Fp(0x11a)](Tp,'textures/melonbp/anims_plus/dfvvupihwy/vtjkewjb'),TS={};TS['translate']='anims_plus.ryzpttwhpf.oiygsqylm';const TY={};TY['rawtext']=[TS];const Ti={};Ti['translate']='anims_plus.ryzpttwhpf.jnbkmmgoyp';const Tl={};Tl['rawtext']=[Ti];const TD={};TD['translate']=Fp(0x19c);const TC={};TC['rawtext']=[TD];const drink_page_form=new ActionFormData()['title'](TY)['body'](Tl)[Fp(0x11a)](TC,Fp(0x109)),TL={};TL['translate']=Fp(0x16a);const TZ={};TZ['rawtext']=[TL];const Tr={};Tr['translate']=Fp(0x1b2);const Te={};Te['rawtext']=[Tr];const Tq={};Tq['translate']=Fp(0x19c);const TM={};TM[Fp(0x17b)]=[Tq];const minecart_page_form=new ActionFormData()[Fp(0x18c)](TZ)[Fp(0x17c)](Te)['button'](TM,Fp(0x128)),TI={};TI['translate']=Fp(0x1c7);const TA={};TA[Fp(0x17b)]=[TI];const Td={};Td['translate']=Fp(0x10e);const TG={};TG['rawtext']=[Td];const TK={};TK['translate']='anims_plus.iujsjnc';const TU={};TU['rawtext']=[TK];const melee_page_form=new ActionFormData()['title'](TA)[Fp(0x17c)](TG)[Fp(0x11a)](TU,'textures/melonbp/anims_plus/dfvvupihwy/plozoycs'),Tb={};Tb['translate']=Fp(0xdc);const Tn={};function Q(){const yH=['lziVh','gBvTA','anims_plus.oiygsqylm','show','title','sendMessage','oMKxz','anims_plus.nshnljbkxm.hjkswdywjj','anims_plus.hnddneyaci.oiygsqylm','anims_plus.nshnljbkxm.zuptxxab','njfbo','VrCSL','CVwbr','anims_plus.crbjnmq.oiygsqylm','anims_plus.rpljgzmq.mvlwvuu','NetgS','playerLeave','pBAID','animation.melonbp_anims_plus.xzrhjepf.anims_plus.vatdpwfi.ziibeulu','controller.animation.melonbp_anims_plus.anims_plus.fcnjcvvxci','anims_plus.iujsjnc','animation.melonbp_anims_plus.xzrhjepf.anims_plus.lwosgeab.plozoycs','anims_plus.nshnljbkxm.zoqasymj','DELje','anims_plus.fhpabfcd.sirprlh.oqnrbmfyi','getDynamicProperty','animation.melonbp_anims_plus.xzrhjepf.anims_plus.lwosgeab.zoqasymj','runInterval','animation.melonbp_anims_plus.xzrhjepf.anims_plus.knfnhyuno','dGdEB','bow','textures/melonbp/anims_plus/dfvvupihwy/vatdpwfi','includes','LONBO','987274lyUpND','melonbp:hcrppqqq','IeLpO','anims_plus.xpwgiicopr.oiygsqylm','textures/melonbp/anims_plus/dfvvupihwy/hjkswdywjj','DtHfb','144Audfib','melonbp_anims_plus:qhpqihdek','anims_plus.linutjzj.jnbkmmgoyp','anims_plus.hnddneyaci.jnbkmmgoyp','textures/melonbp/anims_plus/dfvvupihwy/ffyrrjlqwi','yjDkO','selection','textures/melonbp/anims_plus/dfvvupihwy/uskylhn','xRzNf','anims_plus.fhpabfcd.mrdsggqjv','xVMnn','MGUBV','aVYNh','wgRpX','anims_plus.ybiymyj.jnbkmmgoyp','eatingFood','IRIHe','WqkVv','anims_plus.fhpabfcd.febarqrqjn','anims_plus.rpljgzmq.jnbkmmgoyp','animation.melonbp_anims_plus.xzrhjepf.anims_plus.dbubhbsv.sghxolb','potion','pcwaleyf','anims_plus.plozoycs.oiygsqylm','EGhOh','name','VyoeC','rSgPA','hjaXD','anims_plus.rpljgzmq.kwjwznm','animation.melonbp_anims_plus.xzrhjepf.anims_plus.kjlleyuqe.ziibeulu','text','formValues','anims_plus.quayxsh.jnbkmmgoyp','fishing_rod','NFxRF','xVMfD','controller.animation.melonbp_anims_plus.anims_plus.ndcnysyo','animation.melonbp_anims_plus.xzrhjepf.anims_plus.ndcnysyo.ziibeulu','anims_plus.vutobofktp.oiygsqylm','minecraft:equippable','JgrEb','anims_plus.vemavkmewx.jnbkmmgoyp','controller','anims_plus.nshnljbkxm.vatdpwfi','DIpLK','controller.animation.melonbp_anims_plus.anims_plus.pvjqkuaawj','OqjFG','YvFzr','rxyrO','MKEKi','isClimbing','anims_plus.nshnljbkxm.srofimo','anims_plus.hrvafkdf.oiygsqylm','hfGOU','textures/melonbp/anims_plus/dfvvupihwy/kohbpvj','itemStopUse','bwYLx','anims_plus.nshnljbkxm.bajudkvhhf','anims_plus.arwtiufui.oiygsqylm','isGliding','usedItemID','animation.melonbp_anims_plus.xzrhjepf.anims_plus.ndcnysyo.sghxolb','IWqzJ','aAXZH','xNemq','anims_plus.rpljgzmq.inxqeqn','1409928dlysGD','anims_plus.fhpabfcd.visuhsro','getState','lqjXN','anims_plus.nwmitbkg.jnbkmmgoyp','DRMBA','xkOLV','QEPkB','textures/melonbp/anims_plus/dfvvupihwy/nerdkndjph','animation.melonbp_anims_plus.xzrhjepf.anims_plus.wcescwlft.sghxolb','anims_plus.rpljgzmq.eskwmrqwh','entityHurt','controller.animation.melonbp_anims_plus.anims_plus.vatdpwfi','minecraft:boat','LvYvz','RaDir','drawingBow','textures/melonbp/anims_plus/dfvvupihwy/hiwyvysn','controller.animation.melonbp_anims_plus.anims_plus.bnqmktcs','setDynamicProperty','nuGSZ','heldItem','anims_plus.plozoycs.jnbkmmgoyp','controller.animation.melonbp_anims_plus.anims_plus.lwosgeab','HaEsp','source','anims_plus.ztmbxuzp.jnbkmmgoyp','spyglass','isValid','none','anims_plus.quayxsh.oiygsqylm','translate','animation.melonbp_anims_plus.xzrhjepf.anims_plus.fcnjcvvxci.ziibeulu','get','button','entityRidingOn','iatyx','anims_plus.rpljgzmq.sqndkys','13279WWvgAF','controller.animation.melonbp_anims_plus.anims_plus.iytveky','animation.melonbp_anims_plus.xzrhjepf.anims_plus.vatdpwfi.sghxolb','31412QYfrbj','textField','sabkA','pop','then','textures/melonbp/anims_plus/dfvvupihwy/knqvtdv','controller.animation.melonbp_anims_plus.anims_plus.ngmrtzdb','textures/melonbp/anims_plus/dfvvupihwy/zoqasymj','textures/melonbp/anims_plus/dfvvupihwy/sebqeohgc','hurtEntity','anims_plus.nshnljbkxm.vtjkewjb','2627845EyUsNQ','yMXxr','getComponent','typeId','RXPpD','IzzOz','selectedSlotIndex','anims_plus.rpljgzmq.dqghxascsi','OtZfb','282420CUQrGk','JvHXZ','stopExpression','find','usedItemIndex','JyFPM','textures/melonbp/anims_plus/dfvvupihwy/tochbkyp','afterEvents','subscribe','itemUse','yYIsI','gYZFm','textures/melonbp/anims_plus/dfvvupihwy/srofimo','removeState','PSimh','BHVem','klKdn','anims_plus.zwvhptkg.oiygsqylm','bidlX','anims_plus.nshnljbkxm.kohbpvj','playAnimation','anims_plus.zwvhptkg.jnbkmmgoyp','anims_plus.zsmycgxubw.oiygsqylm','anims_plus.vutobofktp.jnbkmmgoyp','anims_plus.arwtiufui.jnbkmmgoyp','anims_plus.crbjnmq.jnbkmmgoyp','anims_plus.jqvjsdhhzo.oiygsqylm','anims_plus.rpljgzmq.hwmbopwjrk','355SWuKPx','CbHoW','anims_plus.yiuqoasfn.oiygsqylm','qlkpG','animation.melonbp_anims_plus.xzrhjepf.anims_plus.lwosgeab.wgccfknvd','10lxljOo','tigzH','spying','PXlUC','anims_plus.rpljgzmq.nevajdji','textures/melonbp/anims_plus/dfvvupihwy/qeldhao','drinkingPotion','8jzWfBB','minecraft:water_bottle','food','anims_plus.yiuqoasfn.jnbkmmgoyp','playerSpawn','animation.melonbp_anims_plus.xzrhjepf.anims_plus.lwosgeab.uldjalf','anims_plus.bfaoypwbbf.oiygsqylm','IIrGS','SjqRr','651078mBglse','AxaVH','textures/melonbp/anims_plus/dfvvupihwy/siwtnpq','qgEud','anims_plus.linutjzj.oiygsqylm','worldInitialize','textures/melonbp/anims_plus/dfvvupihwy/dklgugphni','crossbow','textures/melonbp/anims_plus/dfvvupihwy/lpttvwau','getPlayers','minecraft:fishing_rod','melonbp:gvnvaznfh','pHYlg','textures/melonbp/anims_plus/dfvvupihwy/zkpgeedb','controller.animation.melonbp_anims_plus.anims_plus.fpqbgqzx','fxBPQ','zySwe','TqRtN','anims_plus.fhpabfcd.sirprlh','BxjOq','isFlying','rawtext','body','anims_plus.nshnljbkxm.sebqeohgc','anims_plus.rpljgzmq.fjvakgxmnv','oMLKc','aVTdg','anims_plus.criaigxbd.jnbkmmgoyp','anims_plus.wbnaogdor.oiygsqylm','UWuPe','sword','qIchw','anims_plus.nshnljbkxm.dklgugphni','1EfHbHh'];Q=function(){return yH;};return Q();}Tn['rawtext']=[Tb];const TV={};TV['translate']=Fp(0x14c);const Tm={};Tm[Fp(0x17b)]=[TV];const TB={};function z(T,F){const y=Q();return z=function(g,t){g=g-(0x258+-0xc2a*-0x3+-0x2608);let J=y[g];return J;},z(T,F);}TB[Fp(0x117)]='anims_plus.iujsjnc';const TP={};TP[Fp(0x17b)]=[TB];const sit_page_form=new ActionFormData()['title'](Tn)['body'](Tm)[Fp(0x11a)](TP,Fp(0x126)),Tx={};Tx[Fp(0x117)]=Fp(0xea);const Ts={};Ts['rawtext']=[Tx];const TR={};TR['translate']='anims_plus.hrvafkdf.jnbkmmgoyp';const Tf={};Tf[Fp(0x17b)]=[TR];const Tc={};Tc[Fp(0x117)]='anims_plus.iujsjnc';const To={};To[Fp(0x17b)]=[Tc];const hurt_page_form=new ActionFormData()[Fp(0x18c)](Ts)['body'](Tf)['button'](To,Fp(0x1a7)),Ta={};Ta[Fp(0x117)]='anims_plus.ztmbxuzp.oiygsqylm';const Tw={};Tw[Fp(0x17b)]=[Ta];const TX={};TX[Fp(0x117)]=Fp(0x112);const Tj={};Tj[Fp(0x17b)]=[TX];const TW={};TW[Fp(0x117)]='anims_plus.iujsjnc';const TE={};TE['rawtext']=[TW];const crossbow_page_form=new ActionFormData()[Fp(0x18c)](Tw)[Fp(0x17c)](Tj)[Fp(0x11a)](TE,Fp(0x100)),F0={};F0['translate']=Fp(0x1ad);const F1={};F1[Fp(0x17b)]=[F0];const F2={};F2[Fp(0x117)]='anims_plus.xpwgiicopr.jnbkmmgoyp';const F3={};F3['rawtext']=[F2];const F4={};F4['translate']=Fp(0x19c);const F5={};F5[Fp(0x17b)]=[F4];const map_page_form=new ActionFormData()[Fp(0x18c)](F1)[Fp(0x17c)](F3)[Fp(0x11a)](F5,'textures/melonbp/anims_plus/dfvvupihwy/siwtnpq'),F6={};F6[Fp(0x117)]=Fp(0x146);const F7={};F7[Fp(0x17b)]=[F6];const F8={};F8['translate']=Fp(0x14a);const F9={};F9[Fp(0x17b)]=[F8];const FQ={};FQ[Fp(0x117)]=Fp(0x19c);const Fz={};Fz['rawtext']=[FQ];const fly_page_form=new ActionFormData()['title'](F7)[Fp(0x17c)](F9)[Fp(0x11a)](Fz,'textures/melonbp/anims_plus/dfvvupihwy/kohbpvj'),FT={};FT[Fp(0x117)]=Fp(0x1c3);const FF={};FF[Fp(0x17b)]=[FT];const Fy={};Fy[Fp(0x117)]='anims_plus.rpljgzmq.raslgunlbc';const Fg={};Fg[Fp(0x17b)]=[Fy];const Ft={};Ft['translate']=Fp(0x196);const FJ={};FJ['rawtext']=[Ft];const FH={};FH[Fp(0x117)]=Fp(0x150);const FN={};FN[Fp(0x17b)]=[FH];const Fv={};Fv['translate']=Fp(0x102);const Fk={};Fk[Fp(0x17b)]=[Fv];const Fu={};Fu['translate']='anims_plus.rpljgzmq.qlwnchvur';const Fh={};Fh[Fp(0x17b)]=[Fu];const toggle_page_form=new ModalFormData()['toggle'](FF,![])['toggle'](Fg,![])[Fp(0x122)](FJ,FN)['textField'](Fk,Fh);function toggle_page(T){const yT=Fp,F={'qgEud':function(g,t){return g==t;},'pTPDY':function(g,t){return g==t;},'VmNyl':'anims_plus.rpljgzmq.kwjwznm','UyppH':function(g,t){return g===t;},'LONBO':function(y,g){return y(g);},'YVcMl':'pcwaleyf','iatyx':function(y,g){return y(g);},'SHuPL':'anims_plus.rpljgzmq.inxqeqn','IRIHe':yT(0x15a)};toggle_page_form['show'](T)[yT(0x125)](i=>{const yF=yT;try{const l=i[yF(0xd5)][-0x173d+0x1f*0xdb+-0x348],D=i[yF(0xd5)][-0x3b7*-0x7+0x732+-0x2132],C=i['formValues'][0x3*-0xc2d+0x23c4+0xc5]['split'](',\x20'),L=i[yF(0xd5)][-0x1f2*-0xb+-0x97*-0x1d+-0x2*0x133f]['split'](',\x20');let Z='';for(const r of world['getAllPlayers']()){const e=r['id'];F[yF(0x169)](l,-0xa12*0x2+-0x1e95+0x12e*0x2b)&&F['pTPDY'](D,-0x1943+0x2c*-0x87+0x3077)&&(removePlayerFromNoAnimations(r),Z=F['VmNyl']),l==-0x156f+0x621+0xf4e&&F[yF(0x169)](D,0x1864+-0x167f+-0x1e4)&&(F['UyppH']('lVMQF',yF(0x131))?(y['setDynamicProperty']('melonbp:fvahgckidb',!![]),g['setDynamicProperty'](yF(0x171),!![])):(F[yF(0x1a9)](addPlayerToNoAnimations,r),Z='anims_plus.rpljgzmq.dqghxascsi')),l==0x2*-0xb41+-0x1d*0x9d+0x284c&&F['qgEud'](D,-0x3*-0xbee+0x139+-0x2502)&&(Z=yF(0x11d));}if(Z){const M={};M['translate']=Z;const I={};I['rawtext']=[M],T[yF(0x18d)](I);}for(const A of C){if(A){const d=world['getPlayers']()[yF(0x138)](G=>G[yF(0xce)]===A);if(d){if(d['getDynamicProperty'](F['YVcMl'])===!![]){F[yF(0x11c)](removePlayerFromNoAnimations,d);const G={};G[yF(0x117)]='anims_plus.rpljgzmq.ikkmyunnw';const K={};K['text']=A;const U={};U['rawtext']=[G,K],T[yF(0x18d)](U);}}else{const b={};b[yF(0x117)]=yF(0x15a);const n={};n['text']=A;const V={};V[yF(0x117)]=F['SHuPL'];const m={};m[yF(0x17b)]=[b,n,V],T['sendMessage'](m);}}}for(const B of L){if(B){const P=world[yF(0x16f)]()[yF(0x138)](x=>x[yF(0xce)]===B);if(P){if(P['getDynamicProperty'](F['YVcMl'])===![]){addPlayerToNoAnimations(P);const x={};x['translate']=yF(0x17e);const s={};s[yF(0xd4)]=B;const R={};R[yF(0x17b)]=[x,s],T[yF(0x18d)](R);}}else{const f={};f['translate']=F[yF(0x1c0)];const c={};c['text']=B;const o={};o[yF(0x117)]='anims_plus.rpljgzmq.inxqeqn';const a={};a['rawtext']=[f,c,o],T[yF(0x18d)](a);}}}}catch{}});}function addPlayerToNoAnimations(F){const yy=Fp,y={};y['rxyrO']='pcwaleyf';const g=y;F['setDynamicProperty'](g[yy(0xe6)],![]);}function removePlayerFromNoAnimations(F){const yg=Fp,y={};y['BHVem']='pcwaleyf';const g=y;F[yg(0x10b)](g[yg(0x144)],!![]);}world['afterEvents'][Fp(0x16b)][Fp(0x13d)](()=>{const yt=Fp,F={};F[yt(0x13f)]='melonbp:fvahgckidb';const y=F;if(!world[yt(0x1a1)](y[yt(0x13f)])){const g=world['getAllPlayers']()[0x1687*0x1+0xd5e+0xbf7*-0x3];g&&g[yt(0x114)]()&&(world[yt(0x10b)](y[yt(0x13f)],!![]),g['setDynamicProperty'](yt(0x171),!![]));}}),world['afterEvents'][Fp(0x161)][Fp(0x13d)](({player:T})=>{const yJ=Fp,F={'lziVh':yJ(0xd2),'ByKmr':function(g,t){return g==t;},'MGUBV':function(g,t){return g==t;},'enqae':function(y,g){return y(g);},'CbHoW':yJ(0x133),'Tscsq':function(g,t){return g==t;},'yoEHB':'melonbp:fvahgckidb','qIchw':yJ(0x171),'JyFPM':yJ(0x107),'bHmGg':'loot\x20spawn\x20~\x20~\x20~\x20loot\x20\x22melonbp/anims_plus/qnbbwtyxb\x22','rSgPA':'melonbp:hcrppqqq','tigzH':yJ(0x1c6)};!world[yJ(0x1a1)]('melonbp:fvahgckidb')&&(world['setDynamicProperty'](F['yoEHB'],!![]),T[yJ(0x10b)](F[yJ(0x185)],!![]));if(!T[yJ(0x1a1)](yJ(0x1ab))){if('RaDir'!==F[yJ(0x13a)]){const g=S['id'];Y==0x94*0x18+0x1e04+-0x2be3&&i==0x69*-0x2f+-0x17c4+-0x3*-0xe59&&(d(G),K=F[yJ(0x188)]),F['ByKmr'](L,0x51*-0x5+-0x1*-0x17e7+-0x1652*0x1)&&F[yJ(0x1bb)](Z,0x1e6c+0xa5d+-0x1b3*0x18)&&(F['enqae'](U,b),n=F[yJ(0x152)]),F['MGUBV'](M,0x6d*0x59+0x140d+0x39f1*-0x1)&&F['Tscsq'](I,-0x2566+-0x1*-0x1a97+-0xad*-0x10)&&(V=yJ(0x11d));}else T['runCommand'](F['bHmGg']),T[yJ(0x10b)](F[yJ(0xd0)],!![]),T[yJ(0x10b)](F[yJ(0x157)],![]);}});
