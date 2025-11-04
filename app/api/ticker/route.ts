import { NextResponse } from "next/server";

type CoinMarketCapListing = {
  symbol?: string;
  quote?: {
    USD?: {
      price?: number;
      percent_change_24h?: number;
    };
  };
};

type TickerItem = {
  symbol: string;
  price: string;
  change: string;
};

type TickerResponse = {
  items: TickerItem[];
};

const CMC_ENDPOINT = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";

export async function GET() {
  const apiKey = process.env.API_KEY_STOCKS;

  if (!apiKey) {
    return NextResponse.json(
      { error: "API key missing on server" },
      { status: 500 },
    );
  }

  try {
    const response = await fetch(CMC_ENDPOINT, {
      headers: {
        "X-CMC_PRO_API_KEY": apiKey,
      },
      cache: "no-store",
    });

    if (!response.ok) {
      const errorBody = await response.text();
      return NextResponse.json(
        {
          error: "Failed to fetch listings",
          status: response.status,
          body: errorBody,
        },
        { status: response.status },
      );
    }

    const data = await response.json();
    const listings: CoinMarketCapListing[] = Array.isArray(data?.data) ? data.data : [];

    const items: TickerItem[] = listings.slice(0, 10).map((item) => {
      const price = Number(item?.quote?.USD?.price ?? NaN);
      const changeValue = Number(item?.quote?.USD?.percent_change_24h ?? NaN);

      const formattedPrice = Number.isFinite(price)
        ? price.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })
        : "N/A";

      const formattedChange = Number.isFinite(changeValue)
        ? `${changeValue >= 0 ? "+" : ""}${changeValue.toFixed(2)}%`
        : "0.00%";

      return {
        symbol: item?.symbol ?? "N/A",
        price: formattedPrice,
        change: formattedChange,
      } as TickerItem;
    });

    return NextResponse.json({ items } as TickerResponse);
  } catch (error) {
    console.error("Failed to fetch cryptocurrency listings", error);
    return NextResponse.json(
      { error: "Unexpected server error" },
      { status: 500 },
    );
  }
}
