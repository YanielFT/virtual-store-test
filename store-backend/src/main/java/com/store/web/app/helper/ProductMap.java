package com.store.web.app.helper;

import lombok.Data;

@Data
public class ProductMap {
    private String downloadLink;
    private Long id;
    private double deliveryCost;
    private String code;
    private String productName;
    private String type;
}
