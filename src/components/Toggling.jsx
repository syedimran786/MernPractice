import React, { useState } from 'react';

let data=`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam saepe laboriosam ea, ipsum mollitia quia beatae qui rem eaque doloremque cumque. Ipsum accusamus pariatur libero iure porro repellat earum eius?
Sint, quod vitae odio voluptatem eligendi, quam facere vero accusamus nostrum delectus aliquam accusantium molestias aperiam minima sunt nam laboriosam, reprehenderit obcaecati reiciendis libero? Sit quis fugiat odio nam velit.
Alias autem error amet delectus asperiores nostrum animi cupiditate quo, saepe itaque ab laborum ipsam voluptatibus velit. Assumenda neque, officia molestias eaque eligendi fugiat animi. Corrupti explicabo ipsum quo doloremque!
Nobis accusamus at molestiae cupiditate minus, obcaecati recusandae velit saepe soluta voluptatum minima amet fugiat temporibus iusto iure consectetur cumque! Quam tempora architecto minima culpa exercitationem minus ab consectetur illo.
Voluptatum quia, totam, ipsam ratione ipsum nulla quas optio repellat aliquam laborum aut distinctio. Ipsam in dicta cupiditate, corrupti libero laudantium illo animi, delectus quod, nihil reiciendis similique voluptatibus cum!
A ratione saepe quisquam adipisci fugiat nihil voluptatum facilis. Nisi ratione beatae tempore fugit pariatur hic blanditiis eius suscipit, animi accusamus doloremque ducimus debitis asperiores impedit, perspiciatis quae eos porro.
Maiores ea sunt dolorem officia, laborum velit repellendus dignissimos rem ratione, necessitatibus consectetur accusamus nobis hic cupiditate amet voluptatibus laboriosam esse molestias eos veniam cum libero voluptates explicabo. Aliquid, minima.
Voluptate quisquam voluptatum necessitatibus. Atque, molestiae maxime. Iste illo consequatur quia quam. Ab rem consequatur culpa magnam ducimus voluptas, commodi alias doloremque in numquam delectus nesciunt voluptate fugiat esse dolor.
Laborum perferendis delectus nostrum quasi modi at, quidem commodi illo voluptas. Ab quisquam fugit, nisi consequatur nemo iure pariatur nam obcaecati officia sit et repudiandae voluptatem laborum eligendi dolor provident?
Rerum, culpa debitis excepturi labore cupiditate aliquid, facere tempore necessitatibus porro soluta doloribus est voluptate sit amet sapiente ex nobis doloremque maxime ab sequi sed minima fuga. Earum, non incidunt!
Quibusdam recusandae earum in iusto officia. Consequatur labore eum voluptatibus nihil nemo voluptatem consequuntur impedit ut cum, voluptatum sed ab explicabo exercitationem at accusamus nisi animi quidem magnam quasi? Sint.
Sunt, eius ipsum minus eum nulla veniam odio necessitatibus officia, tempora asperiores, ducimus nemo nobis cumque nam iure cum reprehenderit adipisci quaerat. Fugit nulla voluptate dolore soluta hic error iusto!
Ab, eaque facere? Nihil consequatur debitis, nulla sit impedit quaerat illum esse enim, qui, accusamus neque quas recusandae saepe repudiandae. Laboriosam officiis nam veniam repellat ullam dolore praesentium necessitatibus similique.
Vero veritatis voluptatem commodi voluptatum quod totam possimus, dolorem, corporis eveniet, impedit perferendis doloremque autem excepturi quis blanditiis ab. Distinctio eum tempore dicta et numquam. Voluptatibus eos illum odit dolore.
Quis veritatis consectetur deserunt mollitia nam id repellendus consequuntur tempore excepturi. Perferendis, voluptate? Quas nulla deleniti atque harum molestias iusto quam rem corporis. Voluptas, neque! Nemo quo repellendus aliquid atque?
Doloremque, nisi vero. Deleniti voluptate voluptatibus et aperiam saepe, repudiandae doloribus ut corporis ipsum facilis porro nam soluta? Adipisci deserunt nemo voluptates nobis? Dolore eos ullam quis voluptatibus! Sit, suscipit?
Pariatur neque maxime debitis sunt quam veniam, optio esse magni recusandae non doloribus ab, in deleniti, repellendus quae error quas. Odit libero repellendus, labore id praesentium ullam numquam consequuntur atque!
Fugit natus iure sit consequatur, animi eius corrupti, vero suscipit voluptates impedit consectetur labore ullam tempore quasi eaque iste architecto, explicabo soluta! Accusamus quis neque quae tenetur, perspiciatis quisquam ducimus.
Perspiciatis deleniti dolorem cumque voluptate eaque praesentium nihil fugit quam harum sapiente odit molestiae, placeat magnam adipisci totam inventore excepturi similique atque officia? Pariatur ea tempora odio beatae quo modi.
Incidunt pariatur quidem voluptatibus repellendus odio sunt nihil sit enim similique nesciunt? Et magnam iusto totam expedita, ipsam assumenda possimus suscipit sequi quaerat amet reprehenderit quidem porro velit quisquam adipisci!
Quam, commodi totam. Sint, amet blanditiis explicabo est earum delectus, pariatur a rem odit vitae velit enim adipisci temporibus atque quibusdam eum quis culpa nostrum dolor, quod dolores voluptatum. Eveniet!
Praesentium culpa, laudantium voluptates dolor sequi consequuntur rem rerum numquam beatae obcaecati ratione totam hic porro animi in dolorum magni, dignissimos debitis magnam harum aut! Provident harum molestiae dicta quibusdam!
Debitis asperiores necessitatibus quaerat, enim sunt facilis iste, nesciunt recusandae ad, quidem cum sint quia nisi soluta incidunt aperiam sequi obcaecati nulla provident accusamus dicta architecto? Minima perferendis eum cum.
Sapiente, tempora? Mollitia earum consequatur minima nihil modi quasi animi officiis a saepe. Animi, recusandae soluta, nam, quibusdam minima obcaecati enim sequi ex mollitia dolor sapiente voluptatem facilis perspiciatis fugiat?
Velit eos dolorum id! Fugit ipsum adipisci placeat quos illo vitae labore debitis quasi natus iusto facere nulla laborum explicabo vel, sit maxime numquam quam eligendi molestiae tenetur velit? Blanditiis.
Sint impedit porro soluta dolore alias labore ipsam natus commodi. Aperiam at modi nihil, suscipit quas veniam labore odio nostrum sequi eveniet consectetur repellendus sed ducimus quam consequatur commodi incidunt.
Ipsam ipsum at minus veniam blanditiis optio, vel, dolorum suscipit quidem necessitatibus expedita dicta, consectetur doloribus illo earum incidunt alias commodi repellat quae non tenetur error? Magnam perferendis voluptates esse!
Quos iusto ipsam porro voluptas! Dolores quas corporis, odit fugit ad minima quae, architecto at beatae similique sint. Repellendus voluptatum ad, praesentium ea qui minus voluptas a debitis doloremque expedita?
Illo temporibus ea odit doloremque ut optio architecto? Enim porro iusto sint vitae quidem eligendi in, ratione veniam magnam a earum sed nihil corrupti voluptas distinctio ipsa animi quia doloribus!
Debitis iusto aperiam cumque praesentium quod laudantium. Ducimus quo totam, sit sequi praesentium repellat quidem. Aliquam delectus voluptatum odit modi, aperiam iusto architecto enim doloremque, laborum corrupti sit nam temporibus.
Dicta hic obcaecati tenetur. Sed dolores veritatis officia beatae mollitia vel sapiente quis dolor, obcaecati laudantium quae temporibus harum ea perspiciatis omnis itaque ducimus voluptates inventore quam. Nemo, architecto explicabo.
Consequuntur possimus, eos voluptates necessitatibus commodi aperiam deserunt voluptatibus architecto, ipsa laudantium totam sed temporibus distinctio enim voluptate aut explicabo doloremque nostrum, exercitationem deleniti. Distinctio delectus facere nesciunt iure repudiandae?
Perspiciatis maiores recusandae natus similique, at doloremque aliquid! Sapiente ea voluptatum at itaque in rem quia repellat? Adipisci, ullam minus quos distinctio sequi id iusto suscipit debitis vero rerum qui?
Earum harum deleniti aspernatur ab corporis doloremque ipsa dolores magnam ipsum! Doloribus laudantium itaque ipsum possimus impedit odio, explicabo tenetur. Quas animi numquam facere eligendi, excepturi quidem voluptatem expedita quam!
Debitis, architecto? Ducimus totam omnis, repellendus delectus quasi sed impedit dolore in molestias nostrum saepe eius, nesciunt magnam eos cum quisquam dolorum quos numquam sunt, commodi ipsam placeat reiciendis vel!
Porro nam, omnis, ex laudantium recusandae voluptatem expedita dignissimos sequi cum blanditiis similique illum deleniti minima fugit quis quae facere repudiandae laborum. Ea sit doloremque dolorem placeat sed odit a?
Ut dicta quisquam assumenda accusamus similique reprehenderit corrupti nobis nihil aliquam fugiat? Natus praesentium quae illum temporibus eveniet esse quam fugit, nihil asperiores excepturi modi atque! Nobis dolor quis odit.
Dicta, impedit sequi a aperiam ratione beatae? Doloremque aut inventore natus exercitationem dolores fugiat tempora, in ex! Explicabo sit nostrum eligendi, adipisci quaerat quis, vero saepe, nam qui harum eos?
Unde nostrum voluptates a perferendis molestias sit eveniet libero iste magni. Non numquam aliquam quam earum. Temporibus non harum culpa corporis. Ipsum tempore corrupti sed adipisci pariatur dolores odio rem?
Culpa quas est nulla eveniet iure aliquam ipsam voluptas explicabo eum, temporibus harum? Qui possimus beatae magni ad aspernatur molestiae excepturi ullam fugiat autem magnam maxime, non, delectus, voluptatibus repellat.
Temporibus necessitatibus inventore, delectus fugit esse consequuntur. Ab libero distinctio, in sed consequatur cumque cupiditate, rerum repellat illo laboriosam nam doloremque dolor? Blanditiis ab, voluptatem alias sed fuga beatae necessitatibus!
Modi tenetur facere dolorum reprehenderit nemo rem iste maxime maiores veritatis ad vitae, cum sint nam commodi quisquam eveniet obcaecati aperiam consectetur culpa. Odit accusamus iusto facilis libero recusandae culpa!
Quas porro sit dolores? Sit voluptatum, quibusdam veritatis molestiae reprehenderit quos enim et labore saepe quia nihil praesentium harum error nulla architecto fugit quo omnis eaque vero, corporis ut! Voluptate.
Eaque aliquid perferendis unde sint odit ratione blanditiis nostrum eum ducimus ipsa repellendus excepturi, dolore sunt rerum consectetur eius optio reiciendis. Vitae cumque in consequuntur dolore distinctio cum ullam quod!
Maxime magnam aliquid nesciunt eveniet unde mollitia ratione rem animi minus totam incidunt obcaecati dolores impedit iure quisquam optio voluptates expedita aut, molestias, exercitationem voluptas non. Dolore iste fugit possimus?
Iure, voluptas quaerat vitae fugit quam ab odit dicta vero nulla magnam accusamus. Incidunt qui voluptates necessitatibus aperiam quos, similique libero iste deleniti. Dolores accusantium qui, numquam reprehenderit maiores optio?
Ducimus necessitatibus perspiciatis eaque nulla quae eveniet, provident velit harum architecto quam. Eum tempora corporis sunt consectetur! Repellendus quaerat mollitia obcaecati, nisi facere, aliquam aperiam illum quidem temporibus assumenda maiores!
Quae cum quaerat deserunt nam, ea, ipsam ducimus omnis eos modi corporis saepe explicabo veritatis repellendus mollitia laborum molestiae necessitatibus. Adipisci quos nesciunt illum sunt accusantium laudantium voluptatum pariatur modi?
Hic eaque harum voluptatem ipsam ut perferendis tempore, a suscipit quisquam maxime. Est possimus ab, ipsam culpa libero corrupti molestiae quas officia beatae? Odio voluptates quod nulla sit accusamus a.
Vitae odit ducimus culpa non, consectetur officia perferendis nisi accusamus hic, alias quae dicta libero atque sed exercitationem. Dicta repellendus deserunt pariatur veritatis qui quia doloremque numquam, ipsam ducimus eos.`
const Toggling = () => {
    let [isbool,setisbool]=useState(true);

    let changeBool=()=>
    {
        setisbool(!isbool)
    }
    return (
        <div>
            <p>
                {isbool?data.slice(0,500):data}  <button onClick={changeBool}>{isbool?"Read More":"Read Less"}</button>
            </p>
          
        </div>
    );
}

export default Toggling;
